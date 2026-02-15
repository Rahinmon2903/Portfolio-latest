import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Certifications from "./pages/Certifications";
import Contact from "./pages/Contact";
import ScrollButtons from "./components/ScrollButtons";

export default function App() {
  return (
    <div className="bg-slate-950 text-slate-100">
      <Navbar />

      <Home />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
       <ScrollButtons />
    </div>
  );
}
