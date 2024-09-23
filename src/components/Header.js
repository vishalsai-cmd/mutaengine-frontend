import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">MUTA Engine</div>
      <nav>
        <ul>
          <li><a href="#overview">Overview</a></li>
          <li><a href="/About">About</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#solutions">Solutions</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
