import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/skills" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-md border-b border-white/10 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* 🔰 Logo */}
        <Link to="/" className="text-xl font-bold text-yellow-300 tracking-wide">
          Akans.dev
        </Link>

        {/* 🔽 Desktop Nav */}
        <ul className="hidden md:flex gap-6 text-white text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `relative px-2 py-1 hover:text-yellow-300 transition ${
                    isActive ? "text-yellow-300" : ""
                  }`
                }
              >
                {item.name}
                {/* Underline effect */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-yellow-300 transition-all duration-300 hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>

        {/* 📱 Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>

      {/* 📱 Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4">
          <ul className="flex flex-col gap-4 text-white">
            {navItems.map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="block px-2 py-1 hover:text-yellow-300"
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.nav>
  );
}

export default Navbar;









