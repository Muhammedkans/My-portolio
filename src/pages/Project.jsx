import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "DevChat",
    description:
      "Real-time developer chat app with MERN stack + Socket.IO, auth, and private messaging.",
    liveLink: "https://mkans-dev-chat-web.vercel.app/",
    githubLink: "https://github.com/Muhammedkans",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
  },
  {
    title: "FoodBey",
    description:
      "FoodBey is a scalable, real-time food delivery ecosystem connecting Customers, Restaurants, and Delivery Partners with role-based dashboards and live order tracking",
    liveLink: "https://my-food-app-omega.vercel.app/",
    githubLink: "https://github.com/Muhammedkans/my-food-app",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.IO", "Typescript"],
  },

];

function Projects() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-10" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 overflow-hidden"
          >
            {/* 🌟 Gradient Border Effect */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-purple-500/30 rounded-2xl transition-all duration-300 pointer-events-none"></div>

            <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* 🔖 Tech Stack Tags */}
            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔗 Buttons */}
            <div className="flex gap-5">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white font-semibold hover:text-cyan-400 transition-colors"
              >
                <FaExternalLinkAlt size={18} /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 text-white font-semibold hover:text-purple-400 transition-colors"
              >
                <FaGithub size={20} /> GitHub Repo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;




