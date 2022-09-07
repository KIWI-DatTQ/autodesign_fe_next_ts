import "@styles/index.css";
import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import theme from "@styles/theme";
import createEmotionCache from "@styles/createEmotionCache";
import CommonLayout from "@layouts/CommonLayout";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>AutoDesign</title>
        {/* <meta name="viewport" content="width=1280" /> */}
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <CommonLayout>
          <Component {...pageProps} />
        </CommonLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
