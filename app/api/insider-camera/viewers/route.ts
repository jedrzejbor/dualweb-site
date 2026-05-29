import { NextResponse } from 'next/server';
import { createViewer } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST() {
  const viewer = await createViewer();

  if (!viewer) {
    return NextResponse.json({ error: 'Brak aktywnej transmisji.' }, { status: 404 });
  }

  return NextResponse.json({
    viewerId: viewer.id,
    viewerKey: viewer.key,
  });
}
