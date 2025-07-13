import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-to-r from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-4 text-center">

        {/* 🔗 Social Icons */}
        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/Muhammedkans"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammed-kans-8647b934a/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-yellow-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* 🧾 Copyright */}
        <p className="text-white/70 text-sm">
          © {new Date().getFullYear()} Muhammed kans. All rights reserved.
        </p>

        {/* ⬆️ Scroll to Top */}
        <button
          onClick={scrollTop}
          className="mt-3 text-yellow-400 hover:text-yellow-300 text-sm flex items-center gap-1"
        >
          <FaArrowUp /> Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;


