import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaGraduationCap, FaTools, FaEnvelope } from "react-icons/fa";

function About() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10" id="about">
      {/* ✨ Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          About Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* 📝 Left: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6 text-lg text-slate-300 leading-relaxed"
        >
          <p>
            Hello! I'm <span className="text-white font-semibold">Muhammed Kans</span>, a passionate <span className="text-cyan-400">MERN Stack Developer</span> based in Kerala, India.
          </p>
          <p>
            My journey into the world of tech has been driven by a relentless curiosity and a desire to build things that matter. I specialize in building robust, scalable web applications that not only function perfectly but also look stunning.
          </p>
          <p>
            I am currently seeking opportunities to bring my skills in <span className="text-purple-400">React, Node.js, Express, MongoDb and Modern UI/UX</span> to a forward-thinking team.
          </p>
        </motion.div>

        {/* 🗂️ Right: Info Cards */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[
            { icon: <FaMapMarkerAlt />, title: "Location", desc: "Kollam, Kerala, India" },
            { icon: <FaGraduationCap />, title: "Education", desc: "BA English (Pursuing)" },
            { icon: <FaTools />, title: "Tech Stack", desc: "MERN Stack, Tailwind" },
            { icon: <FaEnvelope />, title: "Email", desc: "kanskabeer@gmail.com" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white/5 backdrop-blur-lg border border-white/10 p-6 rounded-2xl hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300 group"
            >
              <div className="text-3xl text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;





