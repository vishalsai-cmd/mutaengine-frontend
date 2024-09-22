import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className='flex-row pos'>
      <div className='flex-col'>
      <h1>Our Mission</h1>
      <p>
        At MutaEngine, our mission is to revolutionize software security by creating highly adaptive solutions
        that protect against even the most sophisticated threats. We empower developers and organizations
        with cutting-edge protection.
      </p>
      <button className="learn-more-btn2">Learn More</button>
      </div>
      <div>
        <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Cybersecurity Shield" />
      </div>
      </div>
    </section>
  );
}

export default Hero;
