import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress } from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-200" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
];

function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 💡 Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 mb-8"
      >
        My Skills
      </motion.h2>

      {/* ⚙️ Skill Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center bg-white/10 backdrop-blur-md p-4 rounded-xl shadow-lg hover:shadow-xl transition"
          >
            <div className="text-3xl mb-2">{skill.icon}</div>
            <p className="text-white/90 font-medium">{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

export default Skills;


