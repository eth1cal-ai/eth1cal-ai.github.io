import Image from "next/image";
import Header from "./(components)/Navigation";
import Projects from "./(components)/Projects";
import Experience from "./(components)/Experience";
import Blog from "./(components)/Blog";
import About from "./(components)/About"

export default function Home() {
  return (
    <div className="homepage">
      <Header />
      <About />
      <Projects />
      <Experience />
      <Blog />
    </div>
  );
}
