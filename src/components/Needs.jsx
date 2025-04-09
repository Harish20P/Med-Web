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
              Your Partner in Recovering Lost Revenues
            </h2>
            <p className="needs-description">
              E-Health Care has helped many Healthcare businesses to be successful with their medical coding needs.
            </p>
          </div>
          
          <div className="needs-right">
            <a href="#contact" className="needs-button">
              <span>Discover more</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Needs;