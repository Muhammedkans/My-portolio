function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white dark:bg-gray-900 text-black dark:text-white rounded-xl p-6 max-w-xl w-full relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-xl font-bold text-gray-500 hover:text-red-500"
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>

        {/* 🔧 Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tag, i) => (
            <span
              key={i}
              className="bg-yellow-300 text-black px-3 py-1 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4 mt-4">
          <a
            href={project.liveLink}
            target="_blank"
            className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700"
          >
            🔗 Live Demo
          </a>
          <a
            href={project.githubLink}
            target="_blank"
            className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700"
          >
            💻 GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
