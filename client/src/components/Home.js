import React from 'react';
import MainBg from '../images/seigaiha.png';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
     <div className='page main-bg center-content' style={{backgroundImage: `url(${MainBg})`}}>
      <div className="bannerText text-center">
          <h1 className='bannerTitle'>Welcome to Rails Stack</h1>
          <p className='bannerSubTitle'>Your Full Stack Ruby on Rails Development Resource</p>
          <Link to="/blog">
            <btn className='btn'>Find resources</btn>
          </Link>
        </div>
     </div>
  );
}

export default Home;
