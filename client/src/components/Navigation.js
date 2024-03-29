import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../images/rslogo.svg';
import MenuToggleButton from './MenuToggleButton';
import NavigationItems from './NavigationItems';

const Navigation = props => (
  <div className={props.nameOfClass}>
    <Link to="/" className="navLink logo justify-start">
      <img className="" src={logo} alt="Company logo" />
    </Link>
    <NavigationItems containerClass='nav-items' />
    <div>
      <MenuToggleButton iconContainerClass='menu-toggle' iconClass='hamburger-icon' click={props.mobileMenuHandler} />
    </div>
  </div>
);

export default Navigation;
