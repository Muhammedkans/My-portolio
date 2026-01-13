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
    <section className="max-w-6xl mx-auto px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
      >
        My Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/5 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-white">{project.title}</h3>
            <p className="text-white/70 mt-2">{project.description}</p>

            {/* 🔖 Tech Stack Tags */}
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-yellow-400 text-black px-2 py-1 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* 🔗 Buttons */}
            <div className="mt-4 flex gap-4">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 hover:underline flex items-center gap-1"
              >
                Live <FaExternalLinkAlt size={14} />
              </a>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="text-white hover:underline flex items-center gap-1"
              >
                GitHub <FaGithub size={16} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;




