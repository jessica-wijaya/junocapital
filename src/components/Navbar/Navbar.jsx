import React, { useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  return (
    <nav className={`container ${sticky ? 'dark-grey' : ''}`}>
      <img src={logo} alt="" className="logo" />
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <li>
          <Link to="home" smooth={true} offset={-50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} offset={-15} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="portfolio" smooth={true} offset={-15} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-70} duration={500} className="btn">
            Contact Us
          </Link>
        </li>
      </ul>
      <img src={menu_icon} alt="" className="menu-icon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
