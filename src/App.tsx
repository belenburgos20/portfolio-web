import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-text-main">
      <a href="#projects" className="skip-link">
        Saltar al contenido
      </a>
      <Navbar />
      {/*
        Orden deliberado: quien revisa un portfolio mira los proyectos primero.
        El "sobre mí" va después del stack, cuando ya vio lo que sé hacer.
      */}
      <main id="main">
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
