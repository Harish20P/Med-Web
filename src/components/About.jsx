import React, { useState, useEffect, useRef } from 'react';
import "./About.css";
import reduction from "../assets/reduction.png";
import reductionHover from "../assets/reduction1.png";
import consistency from "../assets/consistency1.png";
import consistencyHover from "../assets/consistency.png";
import project from "../assets/project.png";
import projectHover from "../assets/project (1).png";
import stock from "../assets/ready-stock.png";
import stockHover from "../assets/ready-stock (1).png";

const AboutUs = () => {
  const [counters, setCounters] = useState({
    cost: 0,
    consistency: 0,
    meeting: 0,
    availability: 0
  });
  
  const [hoverStates, setHoverStates] = useState({
    cost: false,
    consistency: false,
    meeting: false,
    availability: false
  });
  
  const [headerVisible, setHeaderVisible] = useState(false);
  const [descriptionVisible, setDescriptionVisible] = useState(false);
  const [counterVisible, setCounterVisible] = useState([false, false, false, false]);
  
  const sectionRef = useRef(null);
  const animationTriggered = useRef(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !animationTriggered.current) {
        animationTriggered.current = true;
        
        setHeaderVisible(true);

        setTimeout(() => {
          setDescriptionVisible(true);
        }, 400);

        setTimeout(() => {
          setCounterVisible(prev => [true, prev[1], prev[2], prev[3]]);
          startCounterAnimation();
        }, 800);
        
        setTimeout(() => {
          setCounterVisible(prev => [prev[0], true, prev[2], prev[3]]);
        }, 1000);
        
        setTimeout(() => {
          setCounterVisible(prev => [prev[0], prev[1], true, prev[3]]);
        }, 1200);
        
        setTimeout(() => {
          setCounterVisible(prev => [prev[0], prev[1], prev[2], true]);
        }, 1400);
      }
    }, { 
      threshold: 0.25,
      rootMargin: '0px 0px -100px 0px' 
    });
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const startCounterAnimation = () => {
    const startTime = Date.now();
    const duration = 2000; 
    
    const finalValues = {
      cost: 50,
      consistency: 99,
      meeting: 100,
      availability: 100
    };
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const easedProgress = easeOut(progress);
      
      setCounters({
        cost: Math.round(easedProgress * finalValues.cost),
        consistency: Math.round(easedProgress * finalValues.consistency),
        meeting: Math.round(easedProgress * finalValues.meeting),
        availability: Math.round(easedProgress * finalValues.availability)
      });
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  };
  
  const handleMouseEnter = (iconName) => {
    setHoverStates(prev => ({
      ...prev,
      [iconName]: true
    }));
  };
  
  const handleMouseLeave = (iconName) => {
    setHoverStates(prev => ({
      ...prev,
      [iconName]: false
    }));
  };
  
  return (
    <div className="about-us-container" id="about" ref={sectionRef}>
      <div className="about-us-content">
        <div className={`about-header ${headerVisible ? 'slide-in-left' : 'hidden-left'}`}>
          <h3>E-HEALTH CARE OVERVIEW</h3>
          <h2>We handle the details, so you can prioritize <br /> what’s important.</h2>
        </div>
        
        <div className={`about-description-container ${descriptionVisible ? 'slide-in-left' : 'hidden-left'}`}>
          <div className="about-description-column">
            <p>
              Emphasizing integrity, data protection, and openness, we strive for operational superiority and ongoing enhancement strategies. Based at our headquarters with a broad range of services, we are an innovative firm adept at closing offshore divides in today’s interconnected world.
            </p>
          </div>
          
          <div className="about-description-column">
            <p>
              Our proficient coders, certified by AAPC and AHIMA, are well-trained and motivated to excel consistently. Through comprehensive and thoughtfully crafted training initiatives, they stay current with industry advancements and standards. These efforts, combined with our proactive mindset, enable us to scale operations effortlessly, ensuring clients experience complete confidence when partnering with us.
            </p>
          </div>
        </div>
      </div>
      
      <div id="counters-section" className="counters-section">
        <div className={`counter-item ${counterVisible[0] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('cost')}
            onMouseLeave={() => handleMouseLeave('cost')}
          >
            <img 
              src={hoverStates.cost ? reductionHover : reduction} 
              alt="Expense Savings" 
            />
          </div>
          <div className="counter-value">{counters.cost}%</div>
          <div className="counter-label">Expense Savings</div>
        </div>
        
        <div className={`counter-item ${counterVisible[1] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('consistency')}
            onMouseLeave={() => handleMouseLeave('consistency')}
          >
            <img 
              src={hoverStates.consistency ? consistencyHover : consistency} 
              alt="Precision" 
            />
          </div>
          <div className="counter-value">{counters.consistency}%</div>
          <div className="counter-label">Precision Consistency</div>
        </div>
        
        <div className={`counter-item ${counterVisible[2] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('meeting')}
            onMouseLeave={() => handleMouseLeave('meeting')}
          >
            <img 
              src={hoverStates.meeting ? projectHover : project} 
              alt="Deadlines" 
            />
          </div>
          <div className="counter-value">{counters.meeting}%</div>
          <div className="counter-label">Adhering to Deadlines</div>
        </div>
        
        <div className={`counter-item ${counterVisible[3] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('availability')}
            onMouseLeave={() => handleMouseLeave('availability')}
          >
            <img 
              src={hoverStates.availability ? stockHover : stock} 
              alt="Accessibility" 
            />
          </div>
          <div className="counter-value">{counters.availability}%</div>
          <div className="counter-label">Round-the-Clock Accessibility</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;