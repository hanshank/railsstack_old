import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationItems = props => {
  let containerClass = props.containerClass;

  return(
    <div className={containerClass}>
      <div className='nav-item'>
        <NavLink to="/tutorials" className="navLink">Tutorials</NavLink>
      </div>
      <div className='nav-item'>
        <NavLink to="/blog" className="navLink">Resources</NavLink>
      </div>
    </div>
  );
}



export default NavigationItems;
