import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-6 mt-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* © Copy Text */}
        <p className="text-sm text-white/70 text-center md:text-left">
          © {new Date().getFullYear()} Muhammed Akans. All rights reserved.
        </p>

        {/* 🔗 Social Icons */}
        <div className="flex gap-4 text-lg">
          <a
            href="https://github.com/Muhammedkans"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/muhammed-kans"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
