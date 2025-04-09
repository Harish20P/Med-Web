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
      text: "Comprehensive support with dedicated account managers & teams, proactive reporting"
    },
    {
      id: 2,
      text: "Our coders are experts in complete code capture"
    },
    {
      id: 3,
      text: "Experienced AAPC and AHIMA certified coders undertake projects to ensure coding accuracy with continuous training and mentoring programs at all levels"
    },
    {
      id: 4,
      text: "E-Health Care is ISO certified for Information Security Management and are HIPAA compliant"
    },
    {
      id: 5,
      text: "24/7 × 365 availability, strong business continuity plans and world-class infrastructure"
    },
    {
      id: 6,
      text: "Agile practices and ability to scale up based on client requirements"
    },
    {
      id: 7,
      text: "Ability to undertake swift transitions on short notice as we are familiar with the various Health plan guidelines. We can thus work immediately without the required intensive training."
    }
  ];

  const rightFeatures = [
    {
      id: 1,
      text: "Ability to cater to a wide range of clientele including hospitals, physician offices, Independent Practice Associations, and a variety of other healthcare providers & payers."
    },
    {
      id: 2,
      text: "Assured adherence to all regulatory, customer and special guidelines"
    },
    {
      id: 3,
      text: "Nimble and well-trained teams – We can switch our teams to any kind of Risk adjustment coding. Our coders are experts in CMS- HHS -HCC and Complete code (ICD 10) capture."
    },
    {
      id: 4,
      text: "Punctual delivery of services and quick turnaround without any compromise on quality"
    },
    {
      id: 5,
      text: "World class services and economical pricing to offer an excellent value proposition."
    },
    {
      id: 6,
      text: "Adherence to stringent quality metrics to ensure appropriate coding practices and prevent revenue loss."
    },
    {
      id: 7,
      text: "Ability to increase reimbursements based on RAF calculations"
    }
  ];

  return (
    <section className="why-choose-us" id="why" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">WHY E-HEALTH CARE?</h2>
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
          <a href="#contact" className="learn-more-btn">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;