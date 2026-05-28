import { randomUUID } from 'crypto';

export type SignalCandidate = RTCIceCandidateInit;
export type SignalDescription = RTCSessionDescriptionInit;

type ViewerState = {
  id: string;
  key: string;
  offer: SignalDescription | null;
  answer: SignalDescription | null;
  viewerCandidates: SignalCandidate[];
  broadcasterCandidates: SignalCandidate[];
  createdAt: number;
  updatedAt: number;
};

type CameraSession = {
  broadcasterKey: string;
  password: string;
  createdAt: number;
  updatedAt: number;
  viewers: Map<string, ViewerState>;
};

const SESSION_MAX_AGE_MS = 1000 * 60 * 60 * 6;
const VIEWER_MAX_AGE_MS = 1000 * 60 * 20;

declare global {
  var insiderCameraSession: CameraSession | undefined;
}

function now() {
  return Date.now();
}

function pruneSession() {
  const session = globalThis.insiderCameraSession;

  if (!session) {
    return null;
  }

  if (now() - session.updatedAt > SESSION_MAX_AGE_MS) {
    globalThis.insiderCameraSession = undefined;
    return null;
  }

  for (const [viewerId, viewer] of session.viewers) {
    if (now() - viewer.updatedAt > VIEWER_MAX_AGE_MS) {
      session.viewers.delete(viewerId);
    }
  }

  return session;
}

export function getSession() {
  return pruneSession();
}

export function createSession(password: string) {
  const session: CameraSession = {
    broadcasterKey: randomUUID(),
    password,
    createdAt: now(),
    updatedAt: now(),
    viewers: new Map(),
  };

  globalThis.insiderCameraSession = session;
  return session;
}

export function touchSession(session: CameraSession) {
  session.updatedAt = now();
}

export function createViewer(password: string) {
  const session = pruneSession();

  if (!session || session.password !== password) {
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

  session.viewers.set(viewer.id, viewer);
  touchSession(session);

  return viewer;
}

export function getViewer(viewerId: string, viewerKey?: string) {
  const session = pruneSession();
  const viewer = session?.viewers.get(viewerId) ?? null;

  if (!session || !viewer) {
    return null;
  }

  if (viewerKey && viewer.key !== viewerKey) {
    return null;
  }

  return { session, viewer };
}

export function validateBroadcaster(broadcasterKey: string) {
  const session = pruneSession();

  if (!session || session.broadcasterKey !== broadcasterKey) {
    return null;
  }

  touchSession(session);
  return session;
}
