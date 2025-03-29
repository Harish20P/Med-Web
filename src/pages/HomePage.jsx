import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import Intro from '../components/Intro';
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Welcome />
      <Intro />
    </div>
  );
};

export default Home;