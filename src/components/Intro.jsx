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
    // Background text animation (slide in from right)
    const backgroundTimer = setTimeout(() => {
      setBackgroundVisible(true);
    }, 1900);

    // Content animations (sequential fade in)
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
          MED CODE
        </div>
        <div className="intro-content">
          <div 
            className={`intro-header ${contentVisible.header ? 'visible' : ''}`}
            style={{ transitionDelay: '2.1s' }}
          >
            WHO WE ARE
          </div>
          <h1 
            className={`intro-title ${contentVisible.title ? 'visible' : ''}`}
            style={{ transitionDelay: '2.3s' }}
          >
            A Reliable Partner for Your Coding Needs
          </h1>
          <p 
            className={`intro-paragraph ${contentVisible.paragraph1 ? 'visible' : ''}`}
            style={{ transitionDelay: '2.4s' }}
          >
            MEDCODE is a dynamic organization of professionals delivering superlative services and powerful transformations in medical coding for
            the healthcare industry. Specializing in Risk Adjustment coding, we deliver holistic solutions that embody quality, security and excellence
            at every touchpoint.
          </p>
          <p 
            className={`intro-paragraph ${contentVisible.paragraph2 ? 'visible' : ''}`}
            style={{ transitionDelay: '2.6s' }}
          >
            Perceptive and perseverant, we bring a consultative approach to understand the complete needs of our clients and deliver tailor-made
            solutions that are comprehensive, precise and legally compliant in all aspects. Combining deep expertise and domain knowledge with
            impressive innovations, we help clients unlock value. Be it Retrospective, HEDIS – (Hybrid / Supplemental), Concurrent, RADV for
            Medicare, Medicaid, and Commercial Insurance, we have the experts and expertise to undertake transitions and launch operations of any
            scale successfully.
          </p>
          <button 
            className={`intro-button ${contentVisible.button ? 'visible' : ''}`}
            style={{ transitionDelay: '2.8s' }}
          >
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;