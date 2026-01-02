import Heading from "../components/Heading"
import AboutMe from "../components/AboutMe"
import Projects from "../components/Projects"
import Links from "../components/Links"
import Skills from "../components/Skills"
import Blog from "../components/Blog"
export default function Index() {
  return (
    <div>
      <Heading />
      <Links />
      <AboutMe />
      <Projects />
      <Skills />
      <Blog />
    </div>
  )
}