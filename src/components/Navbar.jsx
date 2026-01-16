import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/mk-logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
          ? "bg-black/30 backdrop-blur-lg border-b border-white/10 shadow-lg"
          : "bg-transparent py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* 🔰 Logo */}
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img src={logo} alt="Logo" className="h-10 group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            M Kans
          </span>
        </ScrollLink>


        {/* 🖱️ Desktop Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-sm text-slate-300 uppercase tracking-wide">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-cyan-400 scale-105"
              className="relative cursor-pointer hover:text-white transition-colors group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
            </ScrollLink>
          ))}
        </nav>

        {/* 📱 Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer hover:text-cyan-400 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#1a1a2e]/95 backdrop-blur-xl border-t border-white/10 shadow-2xl">
          <div className="flex flex-col items-center py-8 space-y-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="text-slate-300 text-lg font-medium cursor-pointer hover:text-cyan-400 transition tracking-wider uppercase"
              >
                {item}
              </ScrollLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;











