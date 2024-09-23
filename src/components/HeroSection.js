import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Revolutionizing Software Security with <span className='dynamic'>Dynamic Mutation</span></h1>
        <p>Introducing the Polymorphic Code Engine - A New Era in Protecting Your Software.</p>
        <div className="cta-buttons">
          <button className="learn-more-btn1">Learn More</button>
          <button className="start-now-btn">Start Now</button>
        </div>
      </div>
      <div className="hero-visual">
        {/* Add your image/3D animation here */}
        <img src="https://th.bing.com/th/id/OIP.ce4i4yokXWe5eX0z7oWctQHaEP?w=323&h=185&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Security Shield" />
      </div>
    </section>
  );
}

export default HeroSection;
