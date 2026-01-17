import { motion } from "framer-motion";
import { FaDownload, FaFilePdf } from "react-icons/fa";
import profileImg from "../assets/profile.png"; // 🖼️ Replace with your image


function Home() {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-6 py-12 md:py-20 overflow-hidden">

      {/* 🌟 Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>

      {/* ✨ Text Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center md:text-left z-10"
      >
        <div className="inline-block px-4 py-1.5 mb-4 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm font-medium text-cyan-300">
          🚀 MERN Stack Developer
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Hi, I'm  <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-md">
            Muhammed Kans
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-300 font-light max-w-lg leading-relaxed">
          Crafting high-performance web applications with <span className="text-white font-semibold">React, Node.js, & MongoDB</span>.
          Ready to build the future of the web.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
          <a
            href="#contact"
            className="group relative bg-cyan-600 hover:bg-cyan-500 text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(6,182,212,0.5)] hover:shadow-[0_0_30px_rgba(6,182,212,0.7)]"
          >
            Let's Connect
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-transparent border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-8 py-3.5 rounded-full font-semibold flex items-center justify-center gap-2 transition-all backdrop-blur-sm"
          >
            <FaFilePdf className="text-cyan-400 group-hover:text-white transition-colors" size={16} />
            <span>Resume</span>
          </a>
        </div>
      </motion.div>

      {/* 👤 Image Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative group"
      >
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>

        <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl bg-[#0f0c29]">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Home;









