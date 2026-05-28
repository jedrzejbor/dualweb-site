import { NextResponse } from 'next/server';
import { requireInsiderCameraAccess } from '../access';
import { createViewer } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(request: Request) {
  const accessError = requireInsiderCameraAccess(request);

  if (accessError) {
    return accessError;
  }

  const body = (await request.json().catch(() => null)) as { password?: string } | null;
  const password = body?.password?.trim();

  if (!password) {
    return NextResponse.json({ error: 'Podaj haslo.' }, { status: 400 });
  }

  const viewer = await createViewer(password);

  if (!viewer) {
    return NextResponse.json({ error: 'Nieprawidlowe haslo albo brak aktywnej transmisji.' }, { status: 403 });
  }

  return NextResponse.json({
    viewerId: viewer.id,
    viewerKey: viewer.key,
  });
}
