import React from 'react';
import MainBg from '../images/seigaiha.png';


const ComingSoon = () => {
  return (
    <div className='page main-bg center-content' style={{backgroundImage: `url(${MainBg})`}}>
        <div className="bannerText text-center">
            <h1 className='bannerTitle'>Coming Soon: Rails Stack Video Tutorials</h1>
            <p className='bannerSubTitle'>Rails Stack is a place where you can learn and grow as a Full Stack Ruby on Rails Developer. Keep checking this page for awesome upcoming video tutorials</p>
        </div>
    </div>
  );
}

export default ComingSoon;
