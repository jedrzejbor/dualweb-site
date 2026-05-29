import { NextResponse } from 'next/server';
import { redisErrorResponse } from '../errors';
import { createSession, deleteSession, getSession, validateBroadcaster } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  let session;

  try {
    session = await getSession();
  } catch (error) {
    return redisErrorResponse(error);
  }

  return NextResponse.json({
    active: Boolean(session),
    viewerCount: session ? Object.keys(session.viewers).length : 0,
  });
}

export async function POST() {
  let session;

  try {
    session = await createSession();
  } catch (error) {
    return redisErrorResponse(error);
  }

  return NextResponse.json({
    broadcasterKey: session.broadcasterKey,
    viewerCount: Object.keys(session.viewers).length,
  });
}

export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as { broadcasterKey?: string } | null;
  const broadcasterKey = body?.broadcasterKey;
  let isValidBroadcaster = false;

  try {
    isValidBroadcaster = Boolean(broadcasterKey && (await validateBroadcaster(broadcasterKey)));
  } catch (error) {
    return redisErrorResponse(error);
  }

  if (!isValidBroadcaster) {
    return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
  }

  try {
    await deleteSession();
  } catch (error) {
    return redisErrorResponse(error);
  }

  return NextResponse.json({ ok: true });
}
