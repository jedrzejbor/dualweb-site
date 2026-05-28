import { NextResponse } from 'next/server';
import { createSession, getSession, validateBroadcaster } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const session = getSession();

  return NextResponse.json({
    active: Boolean(session),
    viewerCount: session?.viewers.size ?? 0,
  });
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim();

  if (!password || password.length < 4) {
    return NextResponse.json(
      { error: 'Haslo musi miec przynajmniej 4 znaki.' },
      { status: 400 },
    );
  }

  const session = createSession(password);

  return NextResponse.json({
    broadcasterKey: session.broadcasterKey,
    viewerCount: session.viewers.size,
  });
}

export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as { broadcasterKey?: string } | null;
  const broadcasterKey = body?.broadcasterKey;

  if (!broadcasterKey || !validateBroadcaster(broadcasterKey)) {
    return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
  }

  globalThis.insiderCameraSession = undefined;

  return NextResponse.json({ ok: true });
}
