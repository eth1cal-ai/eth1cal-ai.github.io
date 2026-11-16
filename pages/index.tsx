import Head from 'next/head';
import Heading from "../components/Heading"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Links from "../components/Links"
import Skills from "../components/Skills"
import "../styles/globals.css";
// import Blog from "../components/Blog"
export default function Index() {
  return (
    <div className="index">
      <Head>
        <link rel="icon" href="/favicon.ico"/>
        <title>Kristen Su's Website: Home</title>
        <meta name="description" content="Hi, I'm Kristen, an aspiring software engineer. This is my personal portfolio website."></meta>
      </Head>
      <Heading />
      <AboutMe />
      <Links />
      <Projects />
      {/* <Skills /> */}
      {/* <Blog /> */}
    </div>
  )
}