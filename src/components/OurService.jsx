import React, { useEffect, useRef, useState } from 'react';
import './OurService.css';

// Importing icons (replace with actual paths)
import riskIcon1 from '../assets/compliance.png';
import riskIcon2 from '../assets/filtering.png';
import riskIcon3 from '../assets/document.png';
import hedisIcon1 from '../assets/medical-record.png';
import hedisIcon2 from '../assets/search.png';
import hedisIcon3 from '../assets/authenticity.png';
import qualityIcon1 from '../assets/hand-check-solution.png';
import qualityIcon2 from '../assets/packing-list.png';
import qualityIcon3 from '../assets/certification.png';
import radvIcon1 from '../assets/medical-checkup.png';
import radvIcon2 from '../assets/search (2).png';
import radvIcon3 from '../assets/sales.png';

// Hover images (replace with actual paths)
import riskIcon1Hover from '../assets/compliance (1).png';
import riskIcon2Hover from '../assets/filtering (1).png';
import riskIcon3Hover from '../assets/document (1).png';
import hedisIcon1Hover from '../assets/medical-record (1).png';
import hedisIcon2Hover from '../assets/search (1).png';
import hedisIcon3Hover from '../assets/authenticity (1).png';
import qualityIcon1Hover from '../assets/hand-check-solution (1).png';
import qualityIcon2Hover from '../assets/packing-list (1).png';
import qualityIcon3Hover from '../assets/certification (1).png';
import radvIcon1Hover from '../assets/medical-checkup (1).png';
import radvIcon2Hover from '../assets/search (3).png';
import radvIcon3Hover from '../assets/sales (1).png';

const OurServices = () => {
  const [visibleSections, setVisibleSections] = useState({
    header: false,
    risk: false,
    hedis: false,
    quality: false,
    radv: false
  });
  
  const sectionRefs = {
    header: useRef(null),
    risk: useRef(null),
    hedis: useRef(null),
    quality: useRef(null),
    radv: useRef(null)
  };

  const [hoveredIcons, setHoveredIcons] = useState({
    riskIcon1: false,
    riskIcon2: false,
    riskIcon3: false,
    hedisIcon1: false,
    hedisIcon2: false,
    hedisIcon3: false,
    qualityIcon1: false,
    qualityIcon2: false,
    qualityIcon3: false,
    radvIcon1: false,
    radvIcon2: false,
    radvIcon3: false,
  });

  const handleMouseEnter = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: true }));
  };

  const handleMouseLeave = (icon) => {
    setHoveredIcons((prev) => ({ ...prev, [icon]: false }));
  };

  useEffect(() => {
    const observers = {};
    const createObserver = (sectionName) => {
      return new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            setVisibleSections(prev => ({ ...prev, [sectionName]: true }));
            observers[sectionName].disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -100px 0px' }
      );
    };
    
    Object.keys(sectionRefs).forEach(sectionName => {
      if (sectionRefs[sectionName].current) {
        observers[sectionName] = createObserver(sectionName);
        observers[sectionName].observe(sectionRefs[sectionName].current);
      }
    });
    
    return () => {
      Object.values(observers).forEach(observer => observer.disconnect());
    };
  }, []);

  return (
    <div className="our-services-container" id="services">
      <div 
        className={`services-header ${visibleSections.header ? 'fade-in' : 'hidden'}`}
        ref={sectionRefs.header}
      >
        <h3>OUR OFFERINGS</h3>
        <h1>BOOSTED FINANCIAL RESULTS</h1>
      </div>

      <div className="services-content">
        {/* Risk Adjustment Coding Section */}
        <div 
          className={`service-item ${visibleSections.risk ? 'animated' : 'hidden'}`}
          ref={sectionRefs.risk}
        >
          <div className="service-icon-column slide-from-left">
            <div className="service-icon-row">
              <div className="service-icon">
                <img
                  src={hoveredIcons.riskIcon1 ? riskIcon1Hover : riskIcon1}
                  alt="Risk Icon 1"
                  onMouseEnter={() => handleMouseEnter('riskIcon1')}
                  onMouseLeave={() => handleMouseLeave('riskIcon1')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.riskIcon2 ? riskIcon2Hover : riskIcon2}
                  alt="Risk Icon 2"
                  onMouseEnter={() => handleMouseEnter('riskIcon2')}
                  onMouseLeave={() => handleMouseLeave('riskIcon2')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.riskIcon3 ? riskIcon3Hover : riskIcon3}
                  alt="Risk Icon 3"
                  onMouseEnter={() => handleMouseEnter('riskIcon3')}
                  onMouseLeave={() => handleMouseLeave('riskIcon3')}
                />
              </div>
            </div>
          </div>
          <div className="service-text slide-from-right" id="risk-adjustment">
            <h2>RISK ADJUSTMENT CODING</h2>
            <p>
              We specialize in risk adjustment coding, ensuring transparency and detailed reporting. E-Health Care provides top-tier coding services with expert resources.
            </p>
            <p>
              We handle risk-adjustment audits like chart and medical record reviews, collaborating with clients to deliver tailored HCC coding solutions.
            </p>
          </div>
        </div>

        {/* HEDIS Abstraction Section */}
        <div 
          className={`service-item service-item-reverse ${visibleSections.hedis ? 'animated' : 'hidden'}`}
          ref={sectionRefs.hedis}
        >
          <div className="service-text slide-from-left" id="hedis">
            <h2>HEDIS ABSTRACTION</h2>
            <p>
              E-Health Care excels in HEDIS support, accurately analyzing and reporting per NCQA specs to boost quality and star ratings with skilled abstractors.
            </p>
            <p>
              We monitor and address real-time gaps, enhancing compliance and clinical care effectiveness.
            </p>
          </div>
          <div className="service-icon-column slide-from-right">
            <div className="service-icon-row">
              <div className="service-icon">
                <img
                  src={hoveredIcons.hedisIcon1 ? hedisIcon1Hover : hedisIcon1}
                  alt="HEDIS Icon 1"
                  onMouseEnter={() => handleMouseEnter('hedisIcon1')}
                  onMouseLeave={() => handleMouseLeave('hedisIcon1')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.hedisIcon2 ? hedisIcon2Hover : hedisIcon2}
                  alt="HEDIS Icon 2"
                  onMouseEnter={() => handleMouseEnter('hedisIcon2')}
                  onMouseLeave={() => handleMouseLeave('hedisIcon2')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.hedisIcon3 ? hedisIcon3Hover : hedisIcon3}
                  alt="HEDIS Icon 3"
                  onMouseEnter={() => handleMouseEnter('hedisIcon3')}
                  onMouseLeave={() => handleMouseLeave('hedisIcon3')}
                />
              </div>
            </div>
          </div>
        </div>

        {/* External Quality Review Section */}
        <div 
          className={`service-item ${visibleSections.quality ? 'animated' : 'hidden'}`}
          ref={sectionRefs.quality}
        >
          <div className="service-icon-column slide-from-left">
            <div className="service-icon-row">
              <div className="service-icon">
                <img
                  src={hoveredIcons.qualityIcon1 ? qualityIcon1Hover : qualityIcon1}
                  alt="Quality Icon 1"
                  onMouseEnter={() => handleMouseEnter('qualityIcon1')}
                  onMouseLeave={() => handleMouseLeave('qualityIcon1')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.qualityIcon2 ? qualityIcon2Hover : qualityIcon2}
                  alt="Quality Icon 2"
                  onMouseEnter={() => handleMouseEnter('qualityIcon2')}
                  onMouseLeave={() => handleMouseLeave('qualityIcon2')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.qualityIcon3 ? qualityIcon3Hover : qualityIcon3}
                  alt="Quality Icon 3"
                  onMouseEnter={() => handleMouseEnter('qualityIcon3')}
                  onMouseLeave={() => handleMouseLeave('qualityIcon3')}
                />
              </div>
            </div>
          </div>
          <div className="service-text slide-from-right" id="quality-review">
            <h2>EXTERNAL QUALITY REVIEW</h2>
            <p>
              E-Health Care performs quality reviews to identify missed opportunities and recommend codes for better risk scores, following Medicare guidelines.
            </p>
          </div>
        </div>

        {/* RADV Audit Services Section */}
        <div 
          className={`service-item service-item-reverse ${visibleSections.radv ? 'animated' : 'hidden'}`}
          ref={sectionRefs.radv}
        >
          <div className="service-text slide-from-left" id="radv">
            <h2>RADV AUDIT SERVICES</h2>
            <p>
              Our RADV audit services provide insights and prep for audits, reviewing high-volume records and verifying ICD-10 codes under tight deadlines.
            </p>
          </div>
          <div className="service-icon-column slide-from-right">
            <div className="service-icon-row">
              <div className="service-icon">
                <img
                  src={hoveredIcons.radvIcon1 ? radvIcon1Hover : radvIcon1}
                  alt="RADV Icon 1"
                  onMouseEnter={() => handleMouseEnter('radvIcon1')}
                  onMouseLeave={() => handleMouseLeave('radvIcon1')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.radvIcon2 ? radvIcon2Hover : radvIcon2}
                  alt="RADV Icon 2"
                  onMouseEnter={() => handleMouseEnter('radvIcon2')}
                  onMouseLeave={() => handleMouseLeave('radvIcon2')}
                />
              </div>
              <div className="service-arrow">→</div>
              <div className="service-icon">
                <img
                  src={hoveredIcons.radvIcon3 ? radvIcon3Hover : radvIcon3}
                  alt="RADV Icon 3"
                  onMouseEnter={() => handleMouseEnter('radvIcon3')}
                  onMouseLeave={() => handleMouseLeave('radvIcon3')}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;