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
            A TRUSTED PARTNER<br /> FOR YOUR <br /> RISK ADJUSTMENT SOLUTIONS
          </h1>
          <div className={`welcome-taglines ${taglinesVisible ? "element-visible" : ""}`}>
            <p>Our performance is your success.</p>
            <p>Our passion is innovation.</p>
            <p>Our expertise is unmatched. We get you more.</p>
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