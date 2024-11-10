import React from 'react';
import './Home.css';
import dark_arrow from '../../assets/dark-arrow.png';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div className='home container'>
      <div className="home-text">
        <h1>Juno Capital</h1>
        <h2>Empowering Growth Through Strategic Investments and Insight-Driven Solutions</h2>
        <Link to="portfolio" smooth={true} offset={-5} duration={500} className="btn">
          Explore more <img src={dark_arrow} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
