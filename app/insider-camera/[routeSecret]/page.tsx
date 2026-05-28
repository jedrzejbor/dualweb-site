import { notFound } from 'next/navigation';
import { isValidInsiderCameraRouteSecret } from '@/app/api/insider-camera/access';
import InsiderCameraClient from '../InsiderCameraClient';

export const metadata = {
  title: 'Prywatny podglad kamery | Dualweb',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function InsiderCameraPrivatePage({
  params,
}: {
  params: Promise<{ routeSecret: string }>;
}) {
  const { routeSecret } = await params;

  if (!isValidInsiderCameraRouteSecret(routeSecret)) {
    notFound();
  }

  return <InsiderCameraClient routeSecret={routeSecret} />;
}
