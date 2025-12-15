import React from "react";
import { motion } from "framer-motion";
import { FaPaperPlane, FaPlaneDeparture, FaBus } from "react-icons/fa";

export default function ContactForm() {
  return (
    <section className="relative bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen flex flex-col lg:flex-row items-center justify-center px-6 lg:px-24 py-16 overflow-hidden">
      
      {/* Animated Travel Icons */}
      <motion.div
        animate={{ x: ["-100%", "110%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="absolute top-10 left-0 text-blue-400 text-3xl opacity-50"
      >
        <FaPlaneDeparture />
      </motion.div>

      <motion.div
        animate={{ x: ["110%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="absolute top-1/2 left-0 text-green-400 text-3xl opacity-40"
      >
        <FaBus />
      </motion.div>

      <motion.div
        animate={{ y: ["-10%", "10%"] }}
        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut", repeatType: "mirror" }}
        className="absolute bottom-20 right-10 text-yellow-400 text-4xl opacity-50"
      >
        <FaPaperPlane />
      </motion.div>

      {/* Left Info Section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-12"
      >
        <h1 className="text-4xl font-extrabold mb-6 text-gray-800">Get in Touch With Us!</h1>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We love to hear from you! Whether you’re planning your next adventure, 
          have questions about our travel packages, or want to share your experiences, 
          reach out and our team will get back to you promptly.
        </p>
        <ul className="space-y-3 text-gray-700">
          <li><strong>Email:</strong> support@awtravels.com</li>
          <li><strong>Phone:</strong> +91 7447234298</li>
          <li><strong>Address:</strong> 123 Travel Street, India</li>
        </ul>
      </motion.div>

      {/* Form Section */}
      <motion.form
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 bg-white shadow-2xl rounded-xl p-8 w-full max-w-lg relative z-10"
      >
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Send a Message</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          <textarea
            rows="4"
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2"
          >
            <FaPaperPlane className="animate-bounce" /> Send Message
          </button>
        </div>
      </motion.form>
    </section>
  );
}
