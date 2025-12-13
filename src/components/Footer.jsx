import React from "react";
import { Link } from "react-router-dom";
 

export default function Footer() {
  return (
    <>
      <footer className="travel-footer">

        {/* WAVES */}
        <div className="wave-wrapper">
          <div className="wave wave1"></div>
          <div className="wave wave2"></div>
          <div className="wave wave3"></div>
        </div>

        {/* FOOTER CONTENT */}
        <h2 className="footer-title">Explore The World With Us 🌍</h2>

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="#">Destinations</a>
          <a href="#">Packages</a>
          <a href="/contact">Contact</a>
        </div>

        <p className="footer-copy">© 2025 Travel Explorer — All Rights Reserved</p>
      </footer>
    </>
  );
}

