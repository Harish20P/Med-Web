// MedicalStatistics.js (No changes needed to the React component)
import React, { useState } from 'react';
import './MedicalStatistics.css';
import m1 from "../assets/m1.png";
import m2 from "../assets/m2.png";
import m3 from "../assets/m3.png";
import m4 from "../assets/m4.png";

const MedicalStatistics = () => {
  const [hoveredStat, setHoveredStat] = useState(null);

  const stats = [
    {
      id: 1,
      image: m1,
      value: '1224',
      label: 'Designs Completed',
    },
    {
      id: 2,
      image: m4,
      value: '30',
      label: 'Team Members',
    },
    {
      id: 3,
      image: m2,
      value: '15',
      label: 'Years Experience',
    },
    {
      id: 4,
      image: m3,
      value: '530',
      label: 'Satisfied Customers',
    },
  ];

  return (
    <div className="medical-statistics-container">
      <h1 className="statistics-title">Statistics</h1>
      <div className="images-container">
        {stats.map((stat) => (
          <div
            key={stat.id}
            className="statistic-figure"
            onMouseEnter={() => setHoveredStat(stat.id)}
            onMouseLeave={() => setHoveredStat(null)}
          >
            <img
              src={stat.image}
              alt={stat.label}
              className="stat-image"
            />
            
            {hoveredStat === stat.id && (
              <div className="statistic-bubble">
                <div className="statistic-content">
                  <h3>{stat.value}</h3>
                  <p>{stat.label}</p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicalStatistics;