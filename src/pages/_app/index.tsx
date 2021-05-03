import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { fetchAPI } from "../../../libs/api";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../styles/theme";

// Store Strapi Global object in context
export const GlobalContext: any = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        {/* LinkedIn Badge */}
        <script
          type="text/javascript"
          src="https://platform.linkedin.com/badges/js/profile.js"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;500;700&display=swap"
        />

        <link
          rel="preconnect"
          href={
            process.env.AWS_URL ||
            "https://leonunesbs-blog.s3.sa-east-1.amazonaws.com"
          }
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href={
            process.env.AWS_URL ||
            "https://leonunesbs-blog.s3.sa-east-1.amazonaws.com"
          }
          crossOrigin="anonymous"
        />
      </Head>
      <ChakraProvider theme={theme}>
        <GlobalContext.Provider value={global}>
          <Component {...pageProps} />
        </GlobalContext.Provider>
      </ChakraProvider>
    </>
  );
};

// getInitialProps disables automatic static optimization for pages that don't
// have getStaticProps. So article, category and home pages still get SSG.
// Hopefully we can replace this with getStaticProps once this issue is fixed:
// https://github.com/vercel/next.js/discussions/10949
MyApp.getInitialProps = async (ctx: AppContext) => {
  // Calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(ctx);
  // Fetch global site settings from Strapi
  const global = await fetchAPI("/global");
  // Pass the data to our page via props
  return { ...appProps, pageProps: { global } };
};

export default MyApp;
