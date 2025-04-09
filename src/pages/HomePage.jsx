import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Intro from '../components/Intro';
import AboutUs from '../components/About';
import OurServices from '../components/OurService';
import Needs from '../components/Needs';
import WhyChooseUs from '../components/WhyChooseUs';
import Contact from '../components/Contact';
import "./HomePage.css";

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Welcome /> 
      <Intro /> 
      <AboutUs /> 
      <OurServices /> 
      <Needs /> 
      <WhyChooseUs/> 
      <Contact id="contact" />
    </div>
  );
};

export default Home;