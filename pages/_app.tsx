import Head from "next/head";
import type { AppProps } from "next/app";

import "../styles/globals.css";
import "../styles/JobsApplicants.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Layout from "../components/common/Layout";
import { Auth0Provider } from "@auth0/auth0-react";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType;
  };
};

function MyApp({ Component, pageProps }: ComponentWithPageLayout) {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      {Component.PageLayout ? (
        <Component {...pageProps} />
      ) : (
        // <Auth0Provider
        //   domain="dev-tkvggn0o.au.auth0.com"
        //   clientId="OySeeHAFISbIaq1i7Gwz5nmDtBGO0JL8"
        //   redirectUri={window.location.origin}
        // >

        // </Auth0Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </>
  );
}

export default MyApp;
