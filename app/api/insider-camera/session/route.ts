import { NextResponse } from 'next/server';
import { createSession, deleteSession, getSession, validateBroadcaster } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function GET() {
  const session = await getSession();

  return NextResponse.json({
    active: Boolean(session),
    viewerCount: session ? Object.keys(session.viewers).length : 0,
  });
}

export async function POST() {
  const session = await createSession();

  return NextResponse.json({
    broadcasterKey: session.broadcasterKey,
    viewerCount: Object.keys(session.viewers).length,
  });
}

export async function DELETE(request: Request) {
  const body = (await request.json().catch(() => null)) as { broadcasterKey?: string } | null;
  const broadcasterKey = body?.broadcasterKey;

  if (!broadcasterKey || !(await validateBroadcaster(broadcasterKey))) {
    return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
  }

  await deleteSession();

  return NextResponse.json({ ok: true });
}
