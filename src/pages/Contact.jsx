import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      {/* 💌 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
      >
        Contact Me
      </motion.h2>

      {/* 📩 Contact Form */}
      <motion.form
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none"
          />
        </div>
        <textarea
          placeholder="Your Message"
          rows="5"
          className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60 focus:outline-none"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
        >
          Send Message 🚀
        </button>
      </motion.form>

      {/* 📞 Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 text-white/90 space-y-3"
      >
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400" />
          <a href="mailto:kanskabeer@gmail.com" className="hover:underline">
            kanskabeer@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-yellow-400" />
          <p>+91 96338 90675</p>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-yellow-400" />
          <a
            href="https://github.com/Muhammedkans"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            github.com/Muhammedkans
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-yellow-400" />
          <a
            href="https://linkedin.com/in/muhammed-kans"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/muhammed-kans
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;




