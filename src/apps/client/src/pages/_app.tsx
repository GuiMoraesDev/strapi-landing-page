import type { AppProps } from 'next/app';
import Head from 'next/head';

import GlobalStyles from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Advanced React - boilerplate</title>

        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-192.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta
          name="description"
          content="A simple project that uses React, Typescript, NextJs and Styled Components"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default App;
