import React from 'react';
import './Header.css';
import logo from '../assets/dna-code.png'; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-container">
          <img src={logo} alt="Med Code Logo" className="logo-icon" />
          <span className="logo-text">MED CODE</span>
        </div>
        <ul className="nav-links">
          <li><a href="#hub">Hub</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#decode">Decode Needs</a></li>
          <li><a href="#connect">Connect Us</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;