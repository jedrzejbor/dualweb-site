import { NextResponse } from 'next/server';

const DEFAULT_DEV_ROUTE_SECRET = 'studio';

export function getInsiderCameraRouteSecret() {
  return process.env.INSIDER_CAMERA_ROUTE_SECRET || DEFAULT_DEV_ROUTE_SECRET;
}

export function isValidInsiderCameraRouteSecret(value: string | null | undefined) {
  return value === getInsiderCameraRouteSecret();
}

export function requireInsiderCameraAccess(request: Request) {
  const routeSecret = request.headers.get('x-insider-camera-route');

  if (isValidInsiderCameraRouteSecret(routeSecret)) {
    return null;
  }

  return NextResponse.json({ error: 'Brak dostepu.' }, { status: 403 });
}
