import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  const form = useRef();
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gmail123",      // ✅ Your EmailJS Service ID
        "template_6kn5p9d",      // ✅ Your EmailJS Template ID
        form.current,
        "kagWFed7N-opbMcaT"      // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setMessage("❌ Failed to send message.");
        }
      );
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-10" id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-600">
          Contact Me
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* 📧 Form */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 shadow-2xl space-y-6"
        >
          <h3 className="text-2xl font-bold text-white mb-2">Get in Touch</h3>
          <p className="text-slate-400 mb-6">Have a project in mind or just want to say hi? Drop a message!</p>

          <div className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-[1.02] transition-all duration-300"
          >
            Send Message 🚀
          </button>

          {message && (
            <p className={`text-center font-medium ${message.includes("success") ? "text-green-400" : "text-red-400"}`}>
              {message}
            </p>
          )}
        </motion.form>

        {/* 📍 Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col justify-center space-y-8"
        >
          <div className="flex items-start gap-5">
            <div className="p-4 bg-white/5 rounded-full text-cyan-400 text-2xl border border-white/10">
              <FaEnvelope />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Email Me</h4>
              <a href="mailto:kanskabeer@gmail.com" className="text-slate-400 hover:text-cyan-400 transition-colors">
                kanskabeer@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-white/5 rounded-full text-cyan-400 text-2xl border border-white/10">
              <FaPhone />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">Call Me</h4>
              <p className="text-slate-400">+91 96338 90675</p>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-white/5 rounded-full text-cyan-400 text-2xl border border-white/10">
              <FaLinkedin />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">LinkedIn</h4>
              <a
                href="https://www.linkedin.com/in/muhammed-kans-8647b934a/"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Connect on LinkedIn
              </a>
            </div>
          </div>

          <div className="flex items-start gap-5">
            <div className="p-4 bg-white/5 rounded-full text-cyan-400 text-2xl border border-white/10">
              <FaGithub />
            </div>
            <div>
              <h4 className="text-xl font-bold text-white">GitHub</h4>
              <a
                href="https://github.com/Muhammedkans"
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                Check my Code
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;





