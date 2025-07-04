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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#1f1f2e]/90 backdrop-blur shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* 🔰 Logo */}
       <ScrollLink
  to="home"
  smooth={true}
  duration={500}
  className="flex items-center gap-2 cursor-pointer"
>
  <img src={logo} alt="Logo" className="h-8" />
  <span className="text-xl font-bold text-yellow-400">M Kans</span>
</ScrollLink>


        {/* 🖱️ Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium text-white/90">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              activeClass="text-yellow-300 border-b-2 border-yellow-400"
              className="cursor-pointer hover:text-yellow-300 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </nav>

        {/* 📱 Mobile Menu Toggle */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* 📱 Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#1f1f2e] px-6 pb-6 pt-2 space-y-3">
          {navItems.map((item) => (
            <ScrollLink
              key={item}
              to={item}
              smooth={true}
              duration={500}
              offset={-80}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg font-medium cursor-pointer hover:text-yellow-300"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </ScrollLink>
          ))}
        </div>
      )}
    </header>
  );
}

export default Navbar;











