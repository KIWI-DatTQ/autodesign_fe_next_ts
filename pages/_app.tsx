import "../src/styles/index.scss";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>AutoDesign</title>
        {/* <meta name="viewport" content="width=1280" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
