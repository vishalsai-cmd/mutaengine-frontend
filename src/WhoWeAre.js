import React from 'react';
import './WhoWeAre.css'; 

function WhoWeAre() {
  return (
    <section className="who-we-are ?">
      <h2>Who We Are</h2>
      <div className="content-row">
        <div className="content-card flex-row">
          <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Cybersecurity Shield" className='borders'/>
          <p>
          MutaEngine is a team of passionate cybersecurity experts, software engineers, and innovators united by a common vision: to create a world where software developers can innovate without fear of their work being compromised. Our founders, driven by decades of combined experience in cybersecurity, software development, and artificial intelligence, recognized the growing threats in the digital landscape and set out to build a company that could offer robust, future-proof security solutions. We are deeply committed to staying ahead of these threats, constantly evolving our approach to ensure that our clients' software remains secure against the most sophisticated attacks.
          </p>
        </div>
        <br />
        <br />
        <div className="content-card flex-row">
          <p>
          At MutaEngine, we believe that every developer, from startups to global enterprises, deserves the freedom to innovate without the risk of piracy or unauthorized modifications. Our team's diverse expertise allows us to develop cutting-edge technologies, like our Polymorphic Code Engine, which continuously adapts to defend against evolving threats. By partnering closely with our clients, we tailor our solutions to meet their unique security needs, providing peace of mind so they can focus on what they do best—creating transformative software.
          </p>
          <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Tech Security" className='borders'/>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
