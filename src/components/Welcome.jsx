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
            YOUR TRUSTED ALLY <br />IN RISK ADJUSTMENT MASTERY
          </h1>
          <div className={`welcome-taglines ${taglinesVisible ? "element-visible" : ""}`}>
            <p>We drive your success with unmatched precision.</p>
            <p>We redefine standards with forward-thinking solutions.</p>
            <p>Our expertise is your edge — we unlock your full potential.</p>
          </div>
          <a
            href="#services"
            className={`discover-button ${buttonVisible ? "element-visible" : ""}`}
          >
            Discover more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Welcome;