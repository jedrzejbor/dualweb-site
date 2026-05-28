import InsiderCameraClient from './InsiderCameraClient';

export const metadata = {
  title: 'Prywatny podglad kamery | Dualweb',
  robots: {
    index: false,
    follow: false,
  },
};

export default function InsiderCameraPage() {
  return <InsiderCameraClient />;
}
