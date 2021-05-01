import App, { AppContext, AppProps } from "next/app";
import Head from "next/head";
import { createContext } from "react";
import { getStrapiMedia } from "../../../lib/media";
import { fetchAPI } from "../../../lib/api";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../../styles/theme";

// Store Strapi Global object in context
export const GlobalContext: any = createContext({});

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { global } = pageProps;

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={getStrapiMedia(global.favicon)} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Staatliches"
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
