import { randomUUID } from 'crypto';

export type SignalCandidate = RTCIceCandidateInit;
export type SignalDescription = RTCSessionDescriptionInit;

export type ViewerState = {
  id: string;
  key: string;
  offer: SignalDescription | null;
  answer: SignalDescription | null;
  viewerCandidates: SignalCandidate[];
  broadcasterCandidates: SignalCandidate[];
  createdAt: number;
  updatedAt: number;
};

export type CameraSession = {
  broadcasterKey: string;
  createdAt: number;
  updatedAt: number;
  viewers: Record<string, ViewerState>;
};

const SESSION_KEY = 'insider-camera:session';
const SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 6;
const VIEWER_MAX_AGE_MS = 1000 * 60 * 20;
const SESSION_TTL_SECONDS = Math.ceil(SESSION_MAX_AGE_MS / 1000);

declare global {
  var insiderCameraSession: CameraSession | undefined;
}

function now() {
  return Date.now();
}

function hasRedisConfig() {
  return Boolean(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
}

async function redisCommand<T>(command: unknown[]): Promise<T | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) {
    return null;
  }

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(command),
    cache: 'no-store',
  });

  const data = (await response.json()) as { result?: T; error?: string };

  if (!response.ok || data.error) {
    throw new Error(data.error || 'Nie udalo sie polaczyc z Redis.');
  }

  return data.result ?? null;
}

async function readStoredSession() {
  if (!hasRedisConfig()) {
    return globalThis.insiderCameraSession ?? null;
  }

  const stored = await redisCommand<string>(['GET', SESSION_KEY]);
  return stored ? (JSON.parse(stored) as CameraSession) : null;
}

export async function saveSession(session: CameraSession) {
  if (!hasRedisConfig()) {
    globalThis.insiderCameraSession = session;
    return;
  }

  await redisCommand(['SET', SESSION_KEY, JSON.stringify(session), 'EX', SESSION_TTL_SECONDS]);
}

export async function deleteSession() {
  if (!hasRedisConfig()) {
    globalThis.insiderCameraSession = undefined;
    return;
  }

  await redisCommand(['DEL', SESSION_KEY]);
}

function pruneSession(session: CameraSession | null) {
  if (!session) {
    return { session: null, changed: false };
  }

  if (now() - session.updatedAt > SESSION_MAX_AGE_MS) {
    return { session: null, changed: true };
  }

  let changed = false;

  for (const viewerId of Object.keys(session.viewers)) {
    if (now() - session.viewers[viewerId].updatedAt > VIEWER_MAX_AGE_MS) {
      delete session.viewers[viewerId];
      changed = true;
    }
  }

  return { session, changed };
}

async function loadSession() {
  const storedSession = await readStoredSession();
  const { session, changed } = pruneSession(storedSession);

  if (changed) {
    if (session) {
      await saveSession(session);
    } else {
      await deleteSession();
    }
  }

  return session;
}

export async function getSession() {
  return loadSession();
}

export async function createSession() {
  const session: CameraSession = {
    broadcasterKey: randomUUID(),
    createdAt: now(),
    updatedAt: now(),
    viewers: {},
  };

  await saveSession(session);
  return session;
}

export function touchSession(session: CameraSession) {
  session.updatedAt = now();
}

export async function createViewer() {
  const session = await loadSession();

  if (!session) {
    return null;
  }

  const viewer: ViewerState = {
    id: randomUUID(),
    key: randomUUID(),
    offer: null,
    answer: null,
    viewerCandidates: [],
    broadcasterCandidates: [],
    createdAt: now(),
    updatedAt: now(),
  };

  session.viewers[viewer.id] = viewer;
  touchSession(session);
  await saveSession(session);

  return viewer;
}

export async function getViewer(viewerId: string, viewerKey?: string) {
  const session = await loadSession();
  const viewer = session?.viewers[viewerId] ?? null;

  if (!session || !viewer) {
    return null;
  }

  if (viewerKey && viewer.key !== viewerKey) {
    return null;
  }

  return { session, viewer };
}

export async function validateBroadcaster(broadcasterKey: string) {
  const session = await loadSession();

  if (!session || session.broadcasterKey !== broadcasterKey) {
    return null;
  }

  touchSession(session);
  await saveSession(session);
  return session;
}
