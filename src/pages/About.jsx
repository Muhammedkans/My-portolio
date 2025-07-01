import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaUniversity, FaTools, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <div className="max-w-4xl mx-auto px-4">
      {/* 💬 Heading with Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 mb-8"
      >
        About Me
      </motion.h2>

      {/* 👨‍💻 Bio Section */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-white/80 text-lg text-center leading-relaxed"
      >
        I'm <span className="text-yellow-300 font-semibold">Muhammed Akans</span>, a self-taught MERN Stack Developer from Kerala 🇮🇳.
        I’ve spent the last year learning modern web development through YouTube and online platforms.
        I love creating full-stack apps and I’m currently open for fresher developer roles.
      </motion.p>

      {/* 🧾 Details List */}
      <div className="mt-8 grid gap-4 text-white/90 text-base sm:text-lg">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <FaMapMarkerAlt className="text-yellow-400" />
          <p><strong>Location:</strong> Kollam, Kerala</p>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <FaUniversity className="text-yellow-400" />
          <p><strong>Education:</strong> BA English (in progress), Kerala University</p>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <FaTools className="text-yellow-400" />
          <p><strong>Skills:</strong> React, Node.js, Express, MongoDB, Tailwind CSS</p>
        </motion.div>

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="flex items-center gap-3"
        >
          <FaEnvelope className="text-yellow-400" />
          <p><strong>Email:</strong> kanskabeer@gmail.com</p>
        </motion.div>
      </div>
    </div>
  );
}

export default About;




