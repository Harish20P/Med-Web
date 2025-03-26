import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/hero-image.png';

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-section-inner">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to  SMTS <br />Med Code</h1>
          <p className="hero-description">
            Unlock the potential of your healthcare services with our specialized medical coding
            solutions. Our expert team ensures accurate coding, maximizes your revenue cycle, and
            enhances compliance. Get ready to transform your practice with efficient and reliable
            coding services tailored to your needs.
          </p>
          <button className="hero-button">Get Started Today</button>
        </div>
        <div className="hero-image-container">
          <svg className="background-shape" viewBox="0 0 400 500" preserveAspectRatio="none">
            <path
              d="M30 20 
                 C 800 100, 130 500, 120 500 
                 S 500 150, 140 158, 185 100"
              fill="#138b94"
            />
          </svg>
          <img src={heroImage} alt="Medical professional" className="hero-image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;