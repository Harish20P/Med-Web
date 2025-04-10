import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    services: 'Risk Adjustment Coding',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formDataToSend = {
      name: formData.name,
      phone: formData.phone,
      email: formData.email,
      services: formData.services,
      message: formData.message
    };

    emailjs
      .send(
        'service_ru4wg3q',
        'template_w625m7i',
        formDataToSend,
        'BfvX_3OKqG8bw8iHa'
      )
      .then(
        (result) => {
          setSubmitStatus('Message delivered successfully!');
          setFormData({
            name: '',
            phone: '',
            email: '',
            services: 'Risk Adjustment Coding',
            message: '',
          });
          setIsSubmitting(false);
        },
        (error) => {
          setSubmitStatus('Unable to send message. Please retry.');
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section className="contact-section" id="contact" ref={sectionRef}>
      <div className="contact-container">
        <div className={`contact-info ${isVisible ? 'fade-in' : ''}`}>
          <h3 className="contact-heading">GET IN TOUCH</h3>
          <h2 className="contact-subheading">
            We’re eager to connect with you and assist you.
          </h2>
          <div className="contact-divider"></div>
          
          <div className="location-container">
            <div className="location">
              <h4>CHENNAI</h4>
              <p>
                RMZ Software Park, Pvt Ltd. Campus10, 4th Floor, Unit No.401
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
                3rd Floor, Dallas Center, Survey No. 83/1, Hyderabad
                <br />
                <span className="location-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Knowledge City, Raidurg (Panmaktha), Serilingampally,
                <br />
                Hyderabad, Rangareddi District, Telangana – 500081.
              </p>
            </div>
          </div>
        </div>

        <div className={`contact-form ${isVisible ? 'slide-in' : ''}`}>
          <form ref={formRef} onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">
                  Contact Number <span className="required">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-control"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email Address <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="services">
                Select Service <span className="required">*</span>
              </label>
              <select
                id="services"
                name="services"
                className="form-control"
                value={formData.services}
                onChange={handleChange}
                required
              >
                <option value="Risk Adjustment Coding">Risk Adjustment Coding</option>
                <option value="Medical Coding">Medical Coding</option>
                <option value="Revenue Cycle Management">Revenue Cycle Management</option>
                <option value="Denial Management">Denial Management</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                value={formData.message}
                onChange={handleChange}
                rows="5"
              ></textarea>
            </div>

            <div className="form-group">
              <button type="submit" className="send-message-btn" disabled={isSubmitting}>
                <i className="fas fa-paper-plane"></i> {isSubmitting ? 'Submitting...' : 'Submit Message'}
              </button>
              {submitStatus && <p className="submit-status">{submitStatus}</p>}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;