import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
//import profileImg from "../assets/profile.png"; // 🖼️ Replace with your image

function Home() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 max-w-7xl mx-auto px-6">
      
      {/* ✨ Text Left Side */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-cyan-300">
          Hi, I'm Muhammed Akans
        </h1>

        <p className="mt-4 text-lg md:text-xl text-white/90 font-medium">
          MERN Stack Developer | Passionate Fresher | Problem Solver
        </p>

        <p className="mt-4 text-white/70 max-w-md">
          I build full-stack applications using React, Node.js, MongoDB, Express, and Tailwind. I’m actively looking for a MERN Stack Developer (Fresher) opportunity.
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <a
            href="#contact"
            className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition"
          >
            Let's Connect
          </a>

          <a
            href="/resume.pdf"
            download
            className="bg-yellow-400 hover:bg-yellow-500 text-black px-6 py-3 rounded-md font-semibold flex items-center gap-2 transition"
          >
            <FaDownload size={16} /> Resume
          </a>
        </div>
      </motion.div>

      {/* 👤 Image Right Side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-yellow-400 shadow-xl"
      >
        <img
          src="https://imgs.search.brave.com/Pkst9v8rIAG2pNCRYOqPPKySXEhIMUpFeFByrItSm-U/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTMz/NDE1OTAyNS9waG90/by9rYXJpbS1iZW56/ZW1hLW9mLXJlYWwt/bWFkcmlkLWNlbGVi/cmF0ZXMtYWZ0ZXIt/c2NvcmluZy10aGVp/ci10ZWFtcy10aGly/ZC1nb2FsLWR1cmlu/Zy10aGUuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPTVYZE41/UVBqTURYWUUwOUZp/UFktS3R1Y0VLbVB5/czRhREhOME13OHFB/U1k9"
          alt="Profile"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </section>
  );
}

export default Home;









