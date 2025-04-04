import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';

const Contact = () => {
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

  return (
    <section className="contact-section" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-info ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="contact-heading">CONTACT US</h3>
          <h2 className="contact-subheading">
            We would love to hear from you and be of service to you.
          </h2>
          <div className="contact-divider"></div>
          
          <div className="location-container">
            <div className="location">
              <h4>CHENNAI</h4>
              <p>
                RMZ Software Park,Pvt Ltd. Campus10 4th Floor; Unit No.401
                <br />
                <span className="location-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                One Paramount, No-110, Mount Poonamallee Rd, Porur,
                <br />
                Chennai, Tamil Nadu 600125.
              </p>
            </div>

            <div className="location">
              <h4>COIMBATORE</h4>
              <p>
                <span className="location-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                179/1, Kandha Enclave, Sarojini Street, Ramnagar,
                <br />
                Gandhipuram, Coimbatore, Tamil Nadu, India - 641012
              </p>
            </div>

            <div className="location">
              <h4>HYDERABAD</h4>
              <p>
                3rd floor, Dallas Center, Survey No. 83/1, Hyderabad
                <br />
                <span className="location-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Knowledge City, Raidurg (Panmaktha), Serilingampally,
                <br />
                Hyderabad, Rangareddi District,Telangana – 500081.
              </p>
            </div>
          </div>
        </div>

        <div className={`contact-form ${isVisible ? 'slide-in' : ''}`}>
          <form>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone <span className="required">*</span></label>
                <input type="tel" id="phone" className="form-control" required />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email <span className="required">*</span></label>
              <input type="email" id="email" className="form-control" required />
            </div>

            <div className="form-group">
              <label htmlFor="services">Choose Services <span className="required">*</span></label>
              <select id="services" className="form-control" required>
                <option value="Risk Adjustment Coding">Risk Adjustment Coding</option>
                <option value="Medical Coding">Medical Coding</option>
                <option value="Revenue Cycle Management">Revenue Cycle Management</option>
                <option value="Denial Management">Denial Management</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" className="form-control" rows="5"></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="send-message-btn">
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;