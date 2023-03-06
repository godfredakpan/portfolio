import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Godfred Akpan - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Godfred Akpan" />
        <meta name="keywords" content="ReactJS, NextJS, NodeJS, JavaScript, AWS, Auth0 " />
        <meta name="description" content="I am a talented Fullstack developer with a passion for solving real time problems" />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta property="og:site_name" content="Godfred Akpan - Fullstack Developer" />
        <meta property="og:locale" content="en_EN" />
        <title data-rh="true">Godfred Akpan - Fullstack Developer</title>
        <meta data-rh="true" property="og:type" content="website"/>
        <meta data-rh="true" property="og:title" content="Godfred Akpan - Fullstack Developer"/>
        <meta data-rh="true" property="og:image" content="/images/godfredakpan.png"/>
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* About */}
        <About />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;