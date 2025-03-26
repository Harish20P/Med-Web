import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import OurServices from '../components/OurServie';
import MedicalStatistics from '../components/MedicalStatistics';
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <HeroSection />
      <OurServices />
      <MedicalStatistics />
    </div>
  );
};

export default Home;