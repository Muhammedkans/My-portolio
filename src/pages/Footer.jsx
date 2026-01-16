import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0f0c29] border-t border-white/10 text-white py-10 mt-20 relative overflow-hidden">
      {/* 🌟 Background Blur */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-20 bg-cyan-500/10 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center gap-6 text-center relative z-10">

        {/* 🔗 Social Icons */}
        <div className="flex gap-8">
          <a
            href="https://github.com/Muhammedkans"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white hover:scale-110 transition-all text-2xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-kans-8647b934a/"
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-cyan-400 hover:scale-110 transition-all text-2xl"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* 🧾 Copyright */}
        <p className="text-slate-500 text-sm font-light">
          © {new Date().getFullYear()} <span className="text-white font-medium">Muhammed Kans</span>. Built with ❤️ & React.
        </p>

        {/* ⬆️ Scroll to Top */}
        <button
          onClick={scrollTop}
          className="mt-2 text-cyan-400 hover:text-cyan-300 text-sm flex items-center gap-2 font-medium transition-colors"
        >
          Back to Top <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;


