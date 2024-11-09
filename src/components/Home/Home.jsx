import React from 'react'
import './Home.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Home = () => {
  return (
    <div className='home container'>
      <div className="home-text">
      <h1>Delivering Your Smile</h1>
      <p> Website Resmi PT. Putra Guna Jaya Mulia</p>
      <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Home
