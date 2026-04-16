import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HackathonDetails from "./components/HackathonDetails";
import AllProjects from "./components/AllProjects";

function HomePage() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <Skills />
      <Projects />
      <Achievements />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#06111f] text-white">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all-projects" element={<AllProjects />} />
          <Route path="/achievements/:id" element={<HackathonDetails />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}