import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Activity from "../components/Activity";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Godfred Akpan - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Godfred Akpan" />
        <meta name="title" content="Experienced Software Developer | Expertise in Full-Stack Development" />
        <meta name="keywords" content="Software development, web development, mobile app development, cloud computing, Laravel, React, Node.js, Next.js, DevOps, AWS, cybersecurity, fullstack engineer, startup developer, backend development, frontend development, remote software engineer, TypeScript, PostgreSQL, software architecture" />
        <meta name="description" content="Godfred Akpan is a full-stack software engineer with 8+ years of experience building scalable, high-impact web and mobile applications. Passionate about startups, cloud-native architectures, and clean code." />
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#2D2E32" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:site_name" content="Godfred Akpan - Fullstack Developer" />
        <meta property="og:locale" content="en_EN" />
        <meta property="og:type" content="website"/>
        <meta property="og:title" content="Godfred Akpan - Fullstack Developer"/>
        <meta property="og:image" content="/images/godfredakpan.png"/>
      </Head>
      <Header />
      <main>
        <About />
        <Projects />
        <Activity />
      </main>
      <Footer />
    </>
  )
}

export default Home;
