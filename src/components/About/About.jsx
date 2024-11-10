import React from 'react';
import './About.css';
import about_img from '../../assets/logo.png';

const About = () => {
  return (
    <div className='about'>
      <div className='about-image'>
        <img src={about_img} alt="About Juno Capital" />
      </div>
      <div className='about-content'>
        <h1>About Us</h1>
        <p>At Juno Capital, we specialize in navigating the dynamic and evolving world of cryptocurrency investments. With a deep understanding of blockchain technology and market trends, our mission is to empower our clients through strategic insights and disciplined investing in digital assets. Our team combines financial acumen with a passion for innovation, focusing on blockchain projects, digital assets, and decentralized finance (DeFi). We believe that cryptocurrency is more than an asset class; it’s a transformative force reshaping global finance.</p>
      </div>
    </div>
  );
};

export default About;
