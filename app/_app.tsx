import type { AppProps } from 'next/app';
import { ProgressProvider } from '@bprogress/next/pages';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ProgressProvider
      height="4px"
      color="#02a85c"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <Component {...pageProps} />
    </ProgressProvider>
  );
}