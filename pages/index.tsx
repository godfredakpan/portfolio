import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Activity from "../components/Activity";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Godfred Akpan - Fullstack Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Godfred Akpan" />
        <meta name="title" content="Experienced Software Developer | Expertise in Full-Stack Development" />
        
        <meta name="keywords" content="Software development, custom software development, software solutions, web development, mobile app development, cloud application development, software testing, software quality assurance, programming languages, software engineering, agile development, software design, software maintenance, software upgrades, software consulting, software project management, software outsourcing, IT services, software support, software integration, software security, software scalability, software architecture, software deployment, Software development,
        Coding,
        Programming,
        Computer science,
        Technology,
        Software engineering,
        Development tools,
        Debugging,
        Agile methodology,
        Software design patterns,
        Open-source software,
        Artificial intelligence,
        Machine learning,
        Cloud computing,
        DevOps,
        Cybersecurity,
        Data analysis,
        Quality assurance,
        Project management,
        Software testing." />
        <meta name="description" content="Looking for an experienced software developer with expertise in full-stack development? Look no further! Our developer has a proven track record of designing, developing, and deploying high-quality software solutions across a variety of platforms and industries. With a keen eye for detail and a passion for innovation, our developer is committed to delivering top-notch results that meet the unique needs of your business. Contact us today to learn more about how our software development expertise can benefit your organization." />
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

      <main>
        {/* Podcast */}
        <Activity />
      </main>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default Home;