import { useEffect } from "react";
import Lenis from "lenis";
import './index.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

// ... imports ...

import About from "./pages/About";
import Skills from "./pages/Skillss";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from './pages/Footer';
import ScrollToTopButton from './components/ScrollTop';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      // Lenis cleanup if necessary, though mostly global on window
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white scroll-smooth">
      <Navbar />

      {/* 🧩 Each section has an id for smooth scrolling */}
      <section id="home" className="py-24">
        <Home />
      </section>

      <section id="about" className="py-24">
        <About />
      </section>

      <section id="skills" className="py-24">
        <Skills />
      </section>

      <section id="projects" className="py-24">
        <Projects />
      </section>

      <section id="contact" className="py-24">
        <Contact />
      </section>

      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;


