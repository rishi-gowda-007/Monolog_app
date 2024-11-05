import React, { useState, useEffect } from 'react';
import './nav.css';
import { Link } from 'react-router-dom';

function Nav() {
  const [hamvisi, Sethamvisi] = useState(true); // Start with the menu hidden
  const ham_style = {
    visibility: hamvisi ? 'visible' : 'hidden',
    opacity: hamvisi ? '1' : '0', // Add opacity for smooth transition
  };

  const toggle = () => {
    Sethamvisi((s) => !s);
  };

  // Ensure nav panel visibility resets when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1200) {
        Sethamvisi(true); // Ensure the nav panel is visible on larger screens
      } else {
        Sethamvisi(false); // Hide the nav panel on smaller screens initially
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div id='nav_main'>
      <div id='nav_logo'></div>
      <div id='anchor_panel' style={ham_style}>
        <Link to='/' className='nav-link'>Home</Link>
        <a href='https://www.emailjs.com/docs/' className='nav-link' target='_blank'>Docs</a>
        <Link to='/MessageHistory' className='nav-link'>MessageHistory</Link>
        <button id='nav_hamburger_close' onClick={toggle}>X</button>
      </div>
      <button id='nav_hamburger' onClick={toggle}>☰</button>
    </div>
  );
}

export default Nav;
