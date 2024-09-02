import React, { useState } from 'react';
import './Navbar.css';
import { FaHome, FaBars } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';
import { MenuItems } from './MenuItems';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Better naming for state

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navigation">
      <a href="/" className="logo">
        <FaHome />
        BUILD
      </a>

      <div className="menu-icon" onClick={toggleMenu} aria-label="Toggle menu">
        {isMenuOpen ? <RxCross1 /> : <FaBars />}
      </div>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        {MenuItems.map((item, index) => (
          <li key={index}>
            <a href={item.url} className={item.cName}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <button className="btn nav-btn">Contact Us</button>
    </nav>
  );
};

export default Navbar;
