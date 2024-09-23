import React from 'react';
import './FeaturesSection.css';

function FeaturesSection() {
  return (
    <section className="code-feature-section">
      <div className="code-example">
        <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Code Snippet" />
      </div>
      <div className="feature-description">
        <h2>What is the Polymorphic Code Engine?</h2>
        <p>
          Polymorphic code engine dynamically mutates the software’s source code in real-time, 
          preventing reverse engineering and ensuring enhanced security.
        </p>
        <button className="learn-more-btn1">Learn More</button>
      </div>
    </section>
  );
}

export default FeaturesSection;
