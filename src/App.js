import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import CodeFeatureSection from './components/CodeFeatureSection';
import FeaturesSection from './components/FeaturesSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import FeaturesSection2 from './components/FeaturesSection2';
import FeaturesSection3 from './components/FeaturesSection3';
import './App.css';
import About from "./About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <StatsSection />
      <CodeFeatureSection />
      <FeaturesSection />
      <FeaturesSection2 />
      <FeaturesSection3 />
      <CallToAction />
      <Footer />
      <br />
      <br />
      <br />
      <h1>About page</h1>
{/*       <Router>
      <Routes>
        <Route exact path='/About' element={<About />} />
      </Routes> 
      </Router> */}
      <About></About>
    </div>
  );
}

export default App;
