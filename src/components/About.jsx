import React, { useState, useEffect, useRef } from 'react';
import "./About.css"
import reduction from "../assets/reduction.png"
import reductionHover from "../assets/reduction1.png" 
import consistency from "../assets/consistency1.png"
import consistencyHover from "../assets/consistency.png" 
import project from "../assets/project.png"
import projectHover from "../assets/project (1).png" 
import stock from "../assets/ready-stock.png"
import stockHover from "../assets/ready-stock (1).png" 

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
    <div className="about-us-container" ref={sectionRef}>
      <div className="about-us-content">
        <div className={`about-header ${headerVisible ? 'slide-in-left' : 'hidden-left'}`}>
          <h3>E-HEALTH CARE AT GLANCE</h3>
          <h2>Let us do the work, so you can focus <br /> on what matters.</h2>
        </div>
        
        <div className={`about-description-container ${descriptionVisible ? 'slide-in-left' : 'hidden-left'}`}>
          <div className="about-description-column">
            <p>
              With strong focus on ethics, data security and transparency, we drive operational excellence and continual improvement plans. Headquartered with a wealth of offerings, we are a progressive company that can easily bridge any offshore gaps in a globalized world.
            </p>
          </div>
          
          <div className="about-description-column">
            <p>
              Our highly skilled AAPC and AHIMA certified coders are experienced and empowered to perform at their optimum best. Robust and well-designed training programs ensure that they are always up to date with the latest developments and requirements. Such programs and our forward-thinking approach, give us the agility to scale up easily. Customers are thus assured of absolute peace of mind when they engage with us.
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
              alt="Cost Reduction" 
            />
          </div>
          <div className="counter-value">{counters.cost}%</div>
          <div className="counter-label">Cost Reduction</div>
        </div>
        
        <div className={`counter-item ${counterVisible[1] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('consistency')}
            onMouseLeave={() => handleMouseLeave('consistency')}
          >
            <img 
              src={hoverStates.consistency ? consistencyHover : consistency} 
              alt="Accuracy" 
            />
          </div>
          <div className="counter-value">{counters.consistency}%</div>
          <div className="counter-label">Consistency in Accuracy</div>
        </div>
        
        <div className={`counter-item ${counterVisible[2] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('meeting')}
            onMouseLeave={() => handleMouseLeave('meeting')}
          >
            <img 
              src={hoverStates.meeting ? projectHover : project} 
              alt="Timelines" 
            />
          </div>
          <div className="counter-value">{counters.meeting}%</div>
          <div className="counter-label">Meeting the Timelines</div>
        </div>
        
        <div className={`counter-item ${counterVisible[3] ? 'fade-in' : 'hidden-fade'}`}>
          <div 
            className="counter-icon"
            onMouseEnter={() => handleMouseEnter('availability')}
            onMouseLeave={() => handleMouseLeave('availability')}
          >
            <img 
              src={hoverStates.availability ? stockHover : stock} 
              alt="Availability" 
            />
          </div>
          <div className="counter-value">{counters.availability}%</div>
          <div className="counter-label">24/7 Availability</div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;