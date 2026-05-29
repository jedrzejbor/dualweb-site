import { NextResponse } from 'next/server';
import { redisErrorResponse } from '../errors';
import { createViewer } from '../store';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST() {
  let viewer;

  try {
    viewer = await createViewer();
  } catch (error) {
    return redisErrorResponse(error);
  }

  if (!viewer) {
    return NextResponse.json({ error: 'Brak aktywnej transmisji.' }, { status: 404 });
  }

  return NextResponse.json({
    viewerId: viewer.id,
    viewerKey: viewer.key,
  });
}
