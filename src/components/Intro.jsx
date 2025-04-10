import React, { useEffect, useRef, useState } from 'react';
import './Intro.css';

const Intro = () => {
  const contentRef = useRef(null);
  const backgroundTextRef = useRef(null);
  const [backgroundVisible, setBackgroundVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState({
    header: false,
    title: false,
    paragraph1: false,
    paragraph2: false,
    button: false
  });

  useEffect(() => {
    const backgroundTimer = setTimeout(() => {
      setBackgroundVisible(true);
    }, 1900);

    const headerTimer = setTimeout(() => {
      setContentVisible(prev => ({ ...prev, header: true }));
    }, 300);

    const titleTimer = setTimeout(() => {
      setContentVisible(prev => ({ ...prev, title: true }));
    }, 600);

    const paragraph1Timer = setTimeout(() => {
      setContentVisible(prev => ({ ...prev, paragraph1: true }));
    }, 900);

    const paragraph2Timer = setTimeout(() => {
      setContentVisible(prev => ({ ...prev, paragraph2: true }));
    }, 1200);

    const buttonTimer = setTimeout(() => {
      setContentVisible(prev => ({ ...prev, button: true }));
    }, 1500);

    return () => {
      clearTimeout(backgroundTimer);
      clearTimeout(headerTimer);
      clearTimeout(titleTimer);
      clearTimeout(paragraph1Timer);
      clearTimeout(paragraph2Timer);
      clearTimeout(buttonTimer);
    };
  }, []);

  useEffect(() => {
    const content = contentRef.current;
    const backgroundText = backgroundTextRef.current;

    const handleMouseMove = (e) => {
      if (!content || !backgroundText) return;
      
      const rect = content.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const contentWidth = rect.width;
 
      const moveX = (mouseX / contentWidth - 0.5) * 250;
      backgroundText.style.transform = `translate(-50%, -50%) translateX(${moveX}px)`;
    };

    content.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      content.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content-wrapper" ref={contentRef}>
        <div 
          className={`background-text ${backgroundVisible ? 'visible' : ''}`} 
          ref={backgroundTextRef}
        >
          E-HEALTH CARE
        </div>
        <div className="intro-content">
          <div 
            className={`intro-header ${contentVisible.header ? 'visible' : ''}`}
            style={{ transitionDelay: '2.1s' }}
          >
            ABOUT US
          </div>
          <h1 
            className={`intro-title ${contentVisible.title ? 'visible' : ''}`}
            style={{ transitionDelay: '2.3s' }}
          >
            Your Trusted Ally in Coding Solutions
          </h1>
          <p 
            className={`intro-paragraph ${contentVisible.paragraph1 ? 'visible' : ''}`}
            style={{ transitionDelay: '2.4s' }}
          >
            E-Health Care is a vibrant team of experts providing exceptional services and transformative results in medical coding for the healthcare sector. With a focus on Risk Adjustment coding, we offer comprehensive solutions that prioritize quality, security, and excellence at every step.
          </p>
          <p 
            className={`intro-paragraph ${contentVisible.paragraph2 ? 'visible' : ''}`}
            style={{ transitionDelay: '2.6s' }}
          >
            Insightful and determined, we adopt a collaborative approach to fully grasp our clients' needs and provide customized solutions that are thorough, accurate, and fully compliant with regulations. Leveraging extensive experience and industry expertise alongside cutting-edge innovations, we enable clients to maximize value. Whether it’s Retrospective, HEDIS (Hybrid/Supplemental), Concurrent, or RADV services for Medicare, Medicaid, and Commercial Insurance, our skilled professionals are equipped to manage transitions and execute operations of any magnitude with success.
          </p>
          <a 
            href="#services"
            className={`intro-button ${contentVisible.button ? 'visible' : ''}`}
            style={{ transitionDelay: '2.8s' }}
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;