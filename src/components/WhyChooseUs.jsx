import React, { useEffect, useRef, useState } from 'react';
import './WhyChooseUs.css';

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const leftFeatures = [
    {
      id: 1,
      text: "Full support with assigned account managers & teams, plus proactive updates"
    },
    {
      id: 2,
      text: "Our coders excel in capturing all codes accurately"
    },
    {
      id: 3,
      text: "Skilled AAPC and AHIMA certified coders manage projects, ensuring precision with ongoing training and mentorship at every level"
    },
    {
      id: 4,
      text: "E-Health Care holds ISO certification for Information Security Management and complies with HIPAA"
    },
    {
      id: 5,
      text: "Round-the-clock availability, robust contingency plans, and top-tier infrastructure"
    },
    {
      id: 6,
      text: "Flexible practices and capacity to expand based on client needs"
    },
    {
      id: 7,
      text: "Quick transitions on short notice due to familiarity with various Health plan guidelines, enabling immediate work without extensive training"
    }
  ];

  const rightFeatures = [
    {
      id: 1,
      text: "Serving diverse clients like hospitals, physician offices, Independent Practice Associations, and numerous healthcare providers & payers"
    },
    {
      id: 2,
      text: "Guaranteed compliance with all regulatory, client, and specific guidelines"
    },
    {
      id: 3,
      text: "Adaptable, trained teams capable of any Risk adjustment coding, with expertise in CMS-HHS-HCC and full ICD-10 code capture"
    },
    {
      id: 4,
      text: "Timely service delivery with fast turnarounds, maintaining high quality"
    },
    {
      id: 5,
      text: "Premium services at competitive prices for exceptional value"
    },
    {
      id: 6,
      text: "Strict adherence to quality standards to ensure proper coding and avoid revenue loss"
    },
    {
      id: 7,
      text: "Expertise in boosting reimbursements through RAF calculations"
    }
  ];

  return (
    <section className="why-choose-us" id="why" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">WHY CHOOSE E-HEALTH CARE?</h2>
        <div className="features-container">
          <div className="features-column left-features">
            {leftFeatures.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`feature-item left-item ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="feature-text">{feature.text}</div>
              </div>
            ))}
          </div>
          <div className="features-column right-features">
            {rightFeatures.map((feature, index) => (
              <div 
                key={feature.id} 
                className={`feature-item right-item ${isVisible ? 'animate' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="feature-text">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="button-container">
          <a href="#contact" className="learn-more-btn">Find Out More</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;