import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
// import Achievements from "../components/Achievements";
import Projects from "../components/Projects";
import Education from "../components/Education";
import Contact from "../components/Contact";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      {/* <Achievements /> */}
      <Projects />
      <Education />
      <Contact />
    </>
  );
}