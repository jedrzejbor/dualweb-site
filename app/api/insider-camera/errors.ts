import { NextResponse } from 'next/server';
import { getRedisConfigStatus } from './store';

export function redisErrorResponse(error: unknown) {
  const message = error instanceof Error ? error.message : 'Nieznany blad konfiguracji Redis.';
  const redis = getRedisConfigStatus();

  console.error('[insider-camera]', message);

  return NextResponse.json(
    {
      error: 'Nie udalo sie zapisac sesji transmisji.',
      details: message,
      redis,
    },
    { status: 500 },
  );
}
