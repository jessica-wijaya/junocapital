import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Home/>
      <div className="container">
        <Title subTitle='Our Services' title='What We Offer'/>
        <Services/>
        <About/>
        <Title subTitle='Gallery' title='Photos'/>
        <Campus/>
        <Title subTitle='Testimonials' title='What They Say'/>
        <Testimonials/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>

    </div>
  )
}

export default App
