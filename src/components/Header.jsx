import React, { useState } from 'react';
import './Header.css';
import logo from '../assets/logo.png';
import { Menu } from 'lucide-react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <div className="logo-text-container">
            <span className="logo-text-med">MED</span>
            <img src={logo} alt="Logo" className="logo" />
            <span className="logo-text-code">CODE</span>
          </div>
        </div>

        <div className={`nav-links-container ${menuOpen ? 'active' : ''}`}>
          <ul className="nav-links">
            <li><a href="#about">ABOUT US</a></li>
            <li className="dropdown">
              <a href="#services">
                SERVICES 
                <span className="dropdown-arrow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-caret-down-fill"
                    viewBox="0 0 16 12"
                  >
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                  </svg>
                </span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#risk-adjustment">RISK ADJUSTMENT CODING</a></li>
                <li><a href="#hedis">HEDIS ABSTRACTION</a></li>
                <li><a href="#quality-review">EXTERNAL QUALITY REVIEW</a></li>
                <li><a href="#radv">RADV AUDIT SERVICES</a></li>
              </ul>
            </li>
            <li><a href="#why">WHY MEDCODE</a></li>
            <li><a href="#compliance">COMPLIANCE</a></li>
            <li><a href="#careers">CAREERS</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>

          <button className="get-started-btn">Get Started</button>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          <Menu size={24} />
        </div>
      </nav>
    </header>
  );
};

export default Header;