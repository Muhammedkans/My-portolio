import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaTools, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <section className="max-w-4xl mx-auto px-6">
      {/* ✨ Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-yellow-400"
      >
        About Me
      </motion.h2>

      {/* 💬 Description */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-white/80 leading-relaxed text-center max-w-2xl mx-auto"
      >
        I'm <span className="font-semibold text-white">Muhammed Akans</span>, a self-taught MERN Stack Developer from Kerala.  
        I’ve spent the last year mastering frontend and backend by building full real-world apps.  
        My goal is to land a **fresher-level MERN developer role** and keep growing.
      </motion.p>

      {/* 🧾 Info Blocks */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="mt-10 grid sm:grid-cols-2 gap-6 text-white/90"
      >
        <div className="bg-white/5 p-5 rounded-xl flex items-start gap-4 shadow-md border border-white/10 hover:shadow-xl transition">
          <FaMapMarkerAlt className="text-yellow-400 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-white">Location</h4>
            <p>Kollam, Kerala, India</p>
          </div>
        </div>

        <div className="bg-white/5 p-5 rounded-xl flex items-start gap-4 shadow-md border border-white/10 hover:shadow-xl transition">
          <FaGraduationCap className="text-yellow-400 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-white">Education</h4>
            <p>BA English (Kerala University, In Progress)</p>
          </div>
        </div>

        <div className="bg-white/5 p-5 rounded-xl flex items-start gap-4 shadow-md border border-white/10 hover:shadow-xl transition">
          <FaTools className="text-yellow-400 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-white">Tech Stack</h4>
            <p>React, Node.js, Express, MongoDB, Tailwind CSS</p>
          </div>
        </div>

        <div className="bg-white/5 p-5 rounded-xl flex items-start gap-4 shadow-md border border-white/10 hover:shadow-xl transition">
          <FaEnvelope className="text-yellow-400 mt-1" size={24} />
          <div>
            <h4 className="font-semibold text-white">Email</h4>
            <p>kanskabeer@gmail.com</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default About;





