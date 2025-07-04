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
    <section className="max-w-4xl mx-auto px-6" id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-10 text-yellow-400"
      >
        Contact Me
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="bg-white/5 p-6 rounded-xl border border-white/10 shadow-md space-y-5"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <input
            type="text"
            name="name" // ✅ match with {{name}} in EmailJS
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60"
          />
          <input
            type="email"
            name="email" // ✅ match with {{email}} in EmailJS
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60"
          />
        </div>
        <textarea
          name="message" // ✅ match with {{message}} in EmailJS
          placeholder="Your Message"
          rows="5"
          required
          className="w-full p-3 rounded-md bg-white/10 text-white placeholder-white/60"
        ></textarea>
        <button
          type="submit"
          className="w-full py-3 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-500 transition"
        >
          Send Message 🚀
        </button>
        {message && <p className="text-green-400 mt-3">{message}</p>}
      </motion.form>

      {/* Static Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-10 text-white/90 space-y-3"
      >
        <div className="flex items-center gap-3">
          <FaEnvelope className="text-yellow-400" />
          <a href="mailto:kanskabeer@gmail.com" className="hover:underline">
            kanskabeer@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="text-yellow-400" />
          <p>+91 96338 90675</p>
        </div>
        <div className="flex items-center gap-3">
          <FaGithub className="text-yellow-400" />
          <a
            href="https://github.com/Muhammedkans"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            github.com/Muhammedkans
          </a>
        </div>
        <div className="flex items-center gap-3">
          <FaLinkedin className="text-yellow-400" />
          <a
            href="https://www.linkedin.com/in/muhammed-kans-8647b934a/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            linkedin.com/in/muhammed-kans
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Contact;





