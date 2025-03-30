import React, { useEffect, useRef, useState } from 'react';
import './OurService.css';

// Importing icons (you'll need to provide the actual paths to these images)
import riskIcon1 from '../assets/reduction.png'; // Replace with actual path
import riskIcon2 from '../assets/reduction.png'; // Replace with actual path
import riskIcon3 from '../assets/reduction.png'; // Replace with actual path
import hedisIcon1 from '../assets/reduction.png'; // Replace with actual path
import hedisIcon2 from '../assets/reduction.png'; // Replace with actual path
import hedisIcon3 from '../assets/reduction.png'; // Replace with actual path

const OurServices = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div className="our-services-container" ref={sectionRef}>
      <div className="services-header">
        <h3 className={isVisible ? 'fade-in' : 'hidden'}>WHAT WE OFFER</h3>
        <h1 className={isVisible ? 'fade-in' : 'hidden'}>IMPROVED FINANCIAL PERFORMANCE</h1>
      </div>

      <div className="services-content">
        {/* Risk Adjustment Coding Section */}
        <div className="service-item">
          <div className="service-icon-row">
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={riskIcon1} alt="Risk Icon 1" />
            </div>
            <div className="service-arrow">
              <span>→</span>
            </div>
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={riskIcon2} alt="Risk Icon 2" />
            </div>
            <div className="service-arrow">
              <span>→</span>
            </div>
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={riskIcon3} alt="Risk Icon 3" />
            </div>
          </div>
          <div className={`service-text ${isVisible ? 'fade-in' : 'hidden'}`}>
            <h2>RISK ADJUSTMENT CODING</h2>
            <p>
              We carry end-to-end expertise in risk adjustment coding and are specialists in the same. Our actions bring total transparency to operations and track the progress and provide detailed reporting and visibility at all touchpoints. MEDCODE offers world-class coding services and our proud of having some of the best resources in the industry on our rolls.
            </p>
            <p>
              Additionally, we are capable of undertaking risk-adjustment audits, including chart reviews, audits of documentation and medical records, etc. We work closely with customers to understand the requirements in detail, come up with proactive suggestions and solutions and create personalized risk adjustment HCC coding solutions to achieve shared success.
            </p>
          </div>
        </div>

        {/* HEDIS Abstraction Section */}
        <div className="service-item">
          <div className="service-icon-row">
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={hedisIcon1} alt="HEDIS Icon 1" />
            </div>
            <div className="service-arrow">
              <span>→</span>
            </div>
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={hedisIcon2} alt="HEDIS Icon 2" />
            </div>
            <div className="service-arrow">
              <span>→</span>
            </div>
            <div className={`service-icon ${isVisible ? 'slide-in-left' : 'hidden-left'}`}>
              <img src={hedisIcon3} alt="HEDIS Icon 3" />
            </div>
          </div>
          <div className={`service-text ${isVisible ? 'fade-in' : 'hidden'}`}>
            <h2>HEDIS ABSTRACTION</h2>
            <p>
              MEDCODE brings unmatched expertise to HEDIS support, and our personnel can abstract, analyze and report accurately on all HEDIS measures as per the relevant NCQA technical specifications. We can thus enhance the quality and star ratings for our clients and deliver value to clients. Our HEDIS abstractors have expertise in all measures and a strong background in clinical knowledge.
            </p>
            <p>
              By close monitoring and closing of real-time gaps, we ensure high compliance care and improvement in the effectiveness of interventions and clinical care.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;