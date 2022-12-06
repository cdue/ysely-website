import 'focus-visible';
import '@/styles/tailwind.css';
import { AppProps } from 'next/app';
import Toaster from '@/components/Toast/Toaster';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
