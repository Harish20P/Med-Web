// ContactPage.jsx
import React, { useState, useEffect } from 'react';
import './Contact.css';

import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';
import bg4 from '../assets/bg4.jpg';

const ContactPage = () => {
  const [currentBg, setCurrentBg] = useState(0);
  const backgrounds = [bg1, bg2, bg3, bg4];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prevBg) => (prevBg + 1) % backgrounds.length);
    }, 5000); // Change background every 5 seconds

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="contact-page">
      <div 
        className="background-carousel" 
        style={{ backgroundImage: `url(${backgrounds[currentBg]})` }}
      >
        <div className="overlay"></div>
      </div>
      
      <div className="contact-header">
        <h1 className="contact-title">Contact Us</h1>
        <div className="phone-icon">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
          </svg>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <div className="contact-details">
            <div className="contact-item">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="detail">
                <h4>Address</h4>
                <p>4671 Sugar Camp Road,</p>
                <p>Owatonna, Minnesota, 55060</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.465 5.69a2.25 2.25 0 01-2.57 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 6.479a2.25 2.25 0 002.572 0L22.5 6.908z" />
                </svg>
              </div>
              <div className="detail">
                <h4>Email</h4>
                <p>wrub7d78i0e@temporary-mail.net</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="icon-wrapper">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="detail">
                <h4>Phone</h4>
                <p>507-475-60945-6094</p>
              </div>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Message</h2>
          <form>
            <input 
              type="text" 
              placeholder="Full Name" 
              required 
            />
            <input 
              type="email" 
              placeholder="Email" 
              required 
            />
            <textarea 
              placeholder="Type your Message..." 
              required 
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;