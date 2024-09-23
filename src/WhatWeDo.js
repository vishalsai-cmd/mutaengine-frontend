import React from 'react';
import './WhatWeDo.css'; 

function WhatWeDo() {
  return (
    <section className="what-we-do">
      <h2>What We Do?</h2>
      <p>We provide advanced software protection with our Polymorphic Code Engine, ensuring your applications stay secure from piracy, reverse engineering, and unauthorized modifications.</p>
      <div className="service-row flex-row total">
        <div className="service-card flex-column borders measure1">
          <p>
          We specialize in advanced software protection through our innovative Polymorphic Code Engine. By constantly mutating the code at runtime, MutaEngine makes it extremely difficult for hackers to decompile or reverse-engineer software, providing an impenetrable barrier against unauthorized access and piracy.

          </p>
          <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        </div>
        <div className="service-card flex-column borders measure2">
          <p>
          Our solutions are designed to integrate seamlessly with your existing development workflows, whether you’re building traditional applications or pioneering new blockchain-based projects in the Web3 space. MutaEngine offers a range of tools and services to ensure your software is secure from every angle.
          </p>
          <img src="https://th.bing.com/th/id/OIP.spMAq2tuykRRdeh1B4w3hQHaHa?w=176&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7" alt="" />
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
