import { Link } from "react-router-dom";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
//import profileImage from "../assets/profile.png"; // 👈 use your image path

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364] text-white flex items-center justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12">

        {/* 🔤 Text Content */}
        <div className="text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300"
          >
            Hey, I'm Muhammed Akans
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mt-6 text-xl sm:text-2xl text-white/90 font-medium"
          >
            MERN Stack Developer | Passionate Fresher | Problem Solver
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-4 text-white/70 max-w-xl"
          >
            I love building full-stack apps using modern tools like React, Node.js & MongoDB. Currently looking for MERN Developer roles.
          </motion.p>

          {/* 📂 Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Contact Me <FaArrowRight size={14} />
            </Link>

            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold transition"
            >
              Download Resume <FaDownload size={14} />
            </a>
          </motion.div>
        </div>

        {/* 🖼️ Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-full flex justify-center"
        >
          <img
            src="https://imgs.search.brave.com/Pkst9v8rIAG2pNCRYOqPPKySXEhIMUpFeFByrItSm-U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NDE1OTAyNS9waG90/by9rYXJpbS1iZW56/ZW1hLW9mLXJlYWwt/bWFkcmlkLWNlbGVi/cmF0ZXMtYWZ0ZXIt/c2NvcmluZy10aGVp/ci10ZWFtcy10aGly/ZC1nb2FsLWR1cmlu/Zy10aGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTVYZE41/UVBqTURYWUUwOUZp/UFktS3R1Y0VLbVB5/czRhREhOME13OHFB/U1k9"
            alt="Profile"
            className="w-72 h-72 rounded-full object-cover border-4 border-yellow-300 shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Home;







