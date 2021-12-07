import type { NextPage } from "next";
import { useEffect } from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";
import LoginForm from "../components/home/LoginForm";
import styles from "../styles/Home.module.css";
import LayoutHomepage from "../components/common/LayoutHomepage";
import checkLogin from "../lib/utils/checkLogin";
import Router from "next/dist/client/router";

function Home() {
  useEffect(() => {
    const currentUser = window.localStorage.getItem("user");
    const isLoggedIn = checkLogin(currentUser);
    if (isLoggedIn) {
      Router.push("/dashboard");
    }
  }, []);

  return (
    <>
      <Head>
        <title>Demo Dashboard</title>
        <meta name="description" content="Demo dashboard" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <h1 className={styles.title}>Welcome to Dashboard</h1>
        <LoginForm />
      </Container>
    </>
  );
}

Home.PageLayout = LayoutHomepage;

export default Home;
