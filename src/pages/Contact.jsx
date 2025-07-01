import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-white">
      {/* 🔰 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300"
      >
        Contact Me
      </motion.h2>

      {/* 🔄 Layout */}
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* 📨 Form */}
        <motion.form
          action="https://formsubmit.co/kanskabeer@gmail.com"
          method="POST"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-xl space-y-4"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 bg-white/20 text-white rounded-md focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 bg-white/20 text-white rounded-md focus:outline-none"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="w-full p-3 bg-white/20 text-white rounded-md focus:outline-none"
          ></textarea>

          {/* 🔘 Button */}
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black font-semibold py-3 rounded-md hover:bg-yellow-500 transition"
          >
            Send Message
          </button>
        </motion.form>

        {/* 📇 Info Panel */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-4 bg-white/10 p-6 rounded-xl backdrop-blur-md"
        >
          <div className="flex items-center gap-3">
            <FaEnvelope className="text-yellow-400" />
            <a href="mailto:kanskabeer@gmail.com" className="hover:underline">
              kanskabeer@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <FaPhone className="text-yellow-400" />
            <span>+91 96338 90675</span>
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
      </div>
    </div>
  );
}

export default Contact;

