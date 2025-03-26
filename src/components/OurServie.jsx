import React from 'react';
import './OurService.css';

const OurServices = () => {
  return (
    <div className="our-services-container">
      <div className="service-item">
        <div className="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-document">
            <path d="M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>
            <path d="M9 9h6M9 13h6M9 17h3"/>
          </svg>
        </div>
        <h3>Medical Coding</h3>
        <p>Ensure accurate medical coding for proper billing and compliance.</p>
      </div>
      
      <div className="service-item">
        <div className="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-bill">
            <path d="M6 3h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/>
            <path d="M9 9h6M9 13h4M9 17h6"/>
          </svg>
        </div>
        <h3>Billing & Compliance</h3>
        <p>Streamline billing processes and ensure regulatory compliance.</p>
      </div>
      
      <div className="service-item">
        <div className="service-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon-audit">
            <path d="M4 4h16v16H4V4Z"/>
            <path d="M9 9h6M9 13h4M9 17h2"/>
          </svg>
        </div>
        <h3>Medical Auditing</h3>
        <p>Conduct detailed audits to maintain accuracy and efficiency.</p>
      </div>
    </div>
  );
};

export default OurServices;
