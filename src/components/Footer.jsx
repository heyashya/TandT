import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 font-sans py-6 px-6 lg:px-24">
      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-extrabold mb-6 tracking-wide">
          Explore The World With Us 🌍
        </h2>

        {/* Footer Links */}
        <div className="flex flex-wrap justify-center gap-8 mb-8">
          <Link
            to="/"
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase text-sm tracking-wider"
          >
            Home
          </Link>
          <Link
            to="/#"
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase text-sm tracking-wider"
          >
            Destinations
          </Link>
          <Link
            to="/#"
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase text-sm tracking-wider"
          >
            Packages
          </Link>
          <Link
            to="/contact"
            className="text-gray-400 hover:text-white transition-colors duration-300 font-medium uppercase text-sm tracking-wider"
          >
            Contact
          </Link>
        </div>

        {/* Social Icons (Optional) */}
        <div className="flex justify-center gap-6 mb-0">
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white transition-transform transform hover:scale-110"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>

        {/* Copy */}
        <p className="text-gray-500 text-sm mt-2">
          © 2025 Travel Explorer — All Rights Reserved
        </p>
      </motion.div>
    </footer>
  );
}
