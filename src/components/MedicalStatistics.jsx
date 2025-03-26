import React from 'react';
import './MedicalStatistics.css';

const MedicalStatistics = () => {
  return (
    <div className="medical-statistics-container">
      <div className="statistic-item">
      <div className="statistic-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3h18v18H3z"/>
            <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
          </svg>
        </div>
        <div className="statistic-content">
          <h3>5000+</h3>
          <p>Medical Codes Processed</p>
        </div>
      </div>

      <div className="statistic-item">
        <div className="statistic-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 1v22M4 5h16M4 19h16M7 9h10M7 15h10"/>
          </svg>
        </div>
        <div className="statistic-content">
          <h3>250+</h3>
          <p>Certified Coders</p>
        </div>
      </div>

      <div className="statistic-item">
        <div className="statistic-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 4H3M21 10H3M10 16h4M4 22h16M6 16h12"/>
          </svg>
        </div>
        <div className="statistic-content">
          <h3>98%</h3>
          <p>Accuracy Rate</p>
        </div>
      </div>

      <div className="statistic-item">
        <div className="statistic-icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 4h18v16H3z"/>
            <path d="M8 4v16M16 4v16M4 10h16M4 14h16"/>
          </svg>
        </div>
        <div className="statistic-content">
          <h3>15+</h3>
          <p>Years of Experience</p>
        </div>
      </div>
    </div>
  );
};

export default MedicalStatistics;