// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <div className='links'>
      <Link to="/">Home&nbsp;&nbsp;&nbsp;|</Link>
      <Link to="/Our_story">Our Story&nbsp;&nbsp;&nbsp;|</Link>
      <Link to="/Home_loan">Home Loan&nbsp;&nbsp;&nbsp;|</Link>
      </div>
      <div className='heading'>
      <p>KEEP IN TOUCH</p>
      </div>
    </footer>
  );
};

export default Footer;
