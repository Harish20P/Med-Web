import React, { useEffect, useState } from "react";
import "./Welcome.css";

const Welcome = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [headingVisible, setHeadingVisible] = useState(false);
  const [taglinesVisible, setTaglinesVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setImageLoaded(true), 500);
    setTimeout(() => setContentVisible(true), 800);
    setTimeout(() => setHeadingVisible(true), 1100);
    setTimeout(() => setTaglinesVisible(true), 1400);
    setTimeout(() => setButtonVisible(true), 1700);
    
    
  }, []);

  return (
    <section className={`welcome-section ${imageLoaded ? "image-loaded" : ""}`}>
      <div className="welcome-container">
        <div className={`welcome-content ${contentVisible ? "content-visible" : ""}`}>
          <h1 className={`welcome-heading ${headingVisible ? "element-visible" : ""}`}>
           A STRATEGIC PARTNER <br />IN RISK ADJUSTMENT EXCELLENCE 
          </h1>
          <div className={`welcome-taglines ${taglinesVisible ? "element-visible" : ""}`}>
            <p>Our performance ensures your success.</p>
            <p>Our innovation transforms industry standards.</p>
            <p>Our expertise stands unrivaled. We maximize your outcomes.</p>
          </div>
          <button className={`discover-button ${buttonVisible ? "element-visible" : ""}`}>
            Discover more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Welcome;