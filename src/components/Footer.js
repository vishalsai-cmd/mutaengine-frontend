// components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#overview">Overview</a>
        <a href="#about">About Us</a>
        <a href="#contact">Contact</a>
        <a href="#features">Features</a>
      </div>
      <div className="social-icons">
        {/* Add your social media links */}
        <a href="#twitter">Twitter</a>
        <a href="#linkedin">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Footer;
