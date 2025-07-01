import './index.css';
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/skills";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Footer from './pages/Footer';
import ScrollToTop from './components/ScrollTop';

function App() {
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
      <ScrollToTop />
    </div>
  );
}

export default App;


