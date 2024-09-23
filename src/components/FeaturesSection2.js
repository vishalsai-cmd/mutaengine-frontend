import React from 'react';
import './FeaturesSection2.css';

function FeaturesSection2() {
  return (
    <section className="code-feature-section">
      <div className="feature-description">
        <h2>How it Works?</h2>
        <p>
By constantly challenging the software code during access or execution the polymorphic code engine creates a moving target, making it extremely difficult to analyze or decompile.
        </p>
        <button className="learn-more-btn1">Learn More</button>
      </div>
      <div className="code-example">
        <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="Code Snippet" />
      </div>
    </section>
  );
}

export default FeaturesSection2;
