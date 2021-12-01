import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Header.css'

const Header = () => {

  const [isMobile, setIsMobile] = useState(false);

  return (
    <nav className='navbar'>
      <h3 className='logo'>ASOS'13</h3>
      <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
        >
        <Link className='home' to='/'>
          <li>Home</li>
        </Link>
        <Link className='members' to='/empdetails'>
          <li>Members</li>
        </Link>
        <Link className='celebrants' to='/empbirthday'>
          <li>Celebrants</li>
        </Link>
      </ul>
      <button className='mobile-menu-icon'
      onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? <i className='icon fa fa-times'></i> : <i className='fa fa-bars'></i>}
      </button>
    </nav>
  )
}

export default Header
