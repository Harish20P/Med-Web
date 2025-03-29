import React from 'react';
import Header from '../components/Header';
import Welcome from '../components/Welcome';
import "./HomePage.css"

const Home = () => {
  return (
    <div className='home-container'>
      <Header />
      <Welcome />
    </div>
  );
};

export default Home;