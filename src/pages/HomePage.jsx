import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OurServices from '../components/OurService';
import ContactPage from '../components/Contact';
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <HeroSection />
      <OurServices />
      <ContactPage />
    </div>
  );
};

export default Home;