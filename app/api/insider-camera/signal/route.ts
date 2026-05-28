import { NextResponse } from 'next/server';
import { requireInsiderCameraAccess } from '../access';
import {
  getSession,
  getViewer,
  saveSession,
  SignalCandidate,
  SignalDescription,
  validateBroadcaster,
} from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

type SignalBody = {
  role?: 'viewer' | 'broadcaster';
  broadcasterKey?: string;
  viewerId?: string;
  viewerKey?: string;
  offer?: SignalDescription;
  answer?: SignalDescription;
  candidate?: SignalCandidate;
};

export async function GET(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const { searchParams } = new URL(request.url);
  const role = searchParams.get('role');

  if (role === 'broadcaster') {
    const broadcasterKey = searchParams.get('broadcasterKey');
    const session = broadcasterKey ? await validateBroadcaster(broadcasterKey) : null;

    if (!session) {
      return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
    }

    return NextResponse.json({
      viewers: Object.values(session.viewers).map((viewer) => ({
        id: viewer.id,
        offer: viewer.offer,
        viewerCandidates: viewer.viewerCandidates,
      })),
    });
  }

  if (role === 'viewer') {
    const viewerId = searchParams.get('viewerId');
    const viewerKey = searchParams.get('viewerKey');
    const result = viewerId && viewerKey ? await getViewer(viewerId, viewerKey) : null;

    if (!result) {
      return NextResponse.json({ error: 'Brak aktywnej transmisji.' }, { status: 404 });
    }

    result.viewer.updatedAt = Date.now();
    result.session.updatedAt = Date.now();
    await saveSession(result.session);

    return NextResponse.json({
      active: Boolean(await getSession()),
      answer: result.viewer.answer,
      broadcasterCandidates: result.viewer.broadcasterCandidates,
    });
  }

  return NextResponse.json({ error: 'Nieznana rola.' }, { status: 400 });
}

export async function POST(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const body = (await request.json().catch(() => null)) as SignalBody | null;

  if (!body?.role) {
    return NextResponse.json({ error: 'Nieznana rola.' }, { status: 400 });
  }

  if (body.role === 'viewer') {
    const result =
      body.viewerId && body.viewerKey ? await getViewer(body.viewerId, body.viewerKey) : null;

    if (!result) {
      return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
    }

    if (body.offer) {
      result.viewer.offer = body.offer;
    }

    if (body.candidate) {
      result.viewer.viewerCandidates.push(body.candidate);
    }

    result.viewer.updatedAt = Date.now();
    result.session.updatedAt = Date.now();
    await saveSession(result.session);

    return NextResponse.json({ ok: true });
  }

  const session = body.broadcasterKey ? await validateBroadcaster(body.broadcasterKey) : null;
  const viewer = body.viewerId ? session?.viewers[body.viewerId] : null;

  if (!session || !viewer) {
    return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
  }

  if (body.answer) {
    viewer.answer = body.answer;
  }

  if (body.candidate) {
    viewer.broadcasterCandidates.push(body.candidate);
  }

  viewer.updatedAt = Date.now();
  session.updatedAt = Date.now();
  await saveSession(session);

  return NextResponse.json({ ok: true });
}
