import { NextResponse } from 'next/server';
import { requireInsiderCameraAccess } from '../access';
import { createSession, deleteSession, getSession, validateBroadcaster } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const session = await getSession();

  return NextResponse.json({
    active: Boolean(session),
    viewerCount: session ? Object.keys(session.viewers).length : 0,
  });
}

export async function POST(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim();

  if (!password || password.length < 4) {
    return NextResponse.json(
      { error: 'Haslo musi miec przynajmniej 4 znaki.' },
      { status: 400 },
    );
  }

  const session = await createSession(password);

  return NextResponse.json({
    broadcasterKey: session.broadcasterKey,
    viewerCount: Object.keys(session.viewers).length,
  });
}

export async function DELETE(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const body = (await request.json().catch(() => null)) as { broadcasterKey?: string } | null;
  const broadcasterKey = body?.broadcasterKey;

  if (!broadcasterKey || !(await validateBroadcaster(broadcasterKey))) {
    return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
  }

  await deleteSession();

  return NextResponse.json({ ok: true });
}
