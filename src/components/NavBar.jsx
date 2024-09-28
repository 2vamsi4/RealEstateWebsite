import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';
import {Link} from 'react-router-dom';

const Navbar = () => {

  const [flip, setFlip] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const nameAnimation = useSpring({
    to: { transform: flip ? 'rotateX(180deg)': 'rotateX(0deg)' },
    config: { duration: 2000 },
    reset: true,
    onRest: () => setFlip(!flip),
  });

  return (
    <div className="navbar">
      <div className="right-section">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaC3l971KAUvwa7IS65nUwpwI98P7osw5EGOjU1twuwC-SFW5HppxYCqbO-w&s" alt="Company Logo" className="logo" />
        <div className="flip-container">
          <animated.div className="flipper" style={nameAnimation}>
            <div className="front">KVK HOMES</div>
            <div className="back">KVK HOMES</div>
          </animated.div>
        </div>
      </div>
      <div className="menu-container">
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar1 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar2 ${isOpen ? 'change' : ''}`}></div>
        <div className={`bar3 ${isOpen ? 'change' : ''}`}></div>
      </div>
      <div className={`nav-links ${isOpen ? 'show' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/Our_story">Our Story</Link>
          <Link to="/Home_loan">Home Loan</Link>
          <Link to="/Investors_corner">Investor's corner</Link>
          <Link to="/Blog">Blog</Link>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
