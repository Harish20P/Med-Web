import React, { useEffect, useRef, useState } from 'react';
import './Needs.css';

const Needs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={componentRef}
      className={`needs-container ${isVisible ? 'visible' : ''}`}
    >
      <div className="needs-card">
        <div className="needs-content">
          <div className="needs-left">
            <h2 className="needs-title">
              Your Ally in Reclaiming Lost Profits
            </h2>
            <p className="needs-description">
              E-Health Care has supported numerous healthcare companies in achieving success with their medical coding requirements.
            </p>
          </div>
          
          <div className="needs-right">
            <a href="#contact" className="needs-button">
              <span>Learn more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;