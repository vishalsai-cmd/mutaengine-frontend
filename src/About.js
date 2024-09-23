import React from 'react';
import Header from './Header';
import Hero from './Hero';
import WhoWeAre from './WhoWeAre';
import WhatWeDo from './WhatWeDo';
import Footer from './Footer';
import Values from './Values';
import './About.css';
import Whychoose from './Whychoose';
import Ourstory from './Ourstory';

function About() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <WhoWeAre />
      <WhatWeDo />
      <Values />
      <Whychoose />
      <br />
      <br />
      <br />
      <br />
      <Ourstory />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default About;
