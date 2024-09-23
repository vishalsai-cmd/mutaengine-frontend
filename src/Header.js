import React from 'react';
import './Header.css'; // Custom styling for header

function Header() {
  return (
    <header className="header">
      <div className="logo">MUTA</div>
      <nav className="navbar">
        <p>Overview</p>
        <p>Assets</p>
        <p>Contact Us</p>
        <p>Solutions</p>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
