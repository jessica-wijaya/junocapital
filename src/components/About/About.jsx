import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-left'>
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon'/>
    </div>
      <div className='about-right'>
      <h3>About JossKurir</h3>
      <h2>Nurturing tomorrow leaders today</h2>
      <p>skibidi toilet desc</p>
      <p>skibidi toilet desc</p>
      <p>skibidi toilet desc</p>
      </div>
    </div>
  )
}

export default About
