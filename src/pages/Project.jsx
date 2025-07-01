import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "DevChat",
    description: "A real-time developer chat app using MERN Stack, Socket.IO, authentication & private messaging.",
    liveLink: "https://mkans-dev-chat-web.vercel.app/",
    githubLink: "https://github.com/Muhammedkans",
    techStack: ["React", "Node", "Socket.IO", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    description: "This very portfolio you’re viewing now! Built with React, Tailwind, Framer Motion, fully responsive.",
    liveLink: "#home",
    githubLink: "https://github.com/Muhammedkans",
    techStack: ["React", "Tailwind", "Framer Motion"],
  },
  // Add more projects as needed
];

function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* 🧠 Animated Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl sm:text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300 mb-8"
      >
        My Projects
      </motion.h2>

      {/* 📦 Project Cards */}
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white/10 backdrop-blur-md text-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
          >
            <h3 className="text-xl font-bold text-yellow-300 mb-2">{project.title}</h3>
            <p className="text-white/80">{project.description}</p>

            {/* 🛠️ Tech Stack */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech, i) => (
                <span
                  key={i}
                  className="bg-yellow-500/20 text-yellow-300 text-sm px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔗 Links */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-cyan-400 hover:underline"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-white hover:underline"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Projects;


