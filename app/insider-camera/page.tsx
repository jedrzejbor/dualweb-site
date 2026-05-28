import { notFound } from 'next/navigation';

export const metadata = {
  title: 'Prywatny podglad kamery | Dualweb',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsiderCameraPage() {
  notFound();
}
