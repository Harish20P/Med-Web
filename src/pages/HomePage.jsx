import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Intro from '../components/Intro';
import AboutUs from '../components/About';
import OurServices from '../components/OurService';
import Needs from '../components/Needs';
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Welcome />
      <Intro />
      <AboutUs />
      <OurServices />
      <Needs />
    </div>
  );
};

export default Home;