import React from 'react'
import './Hero.css'
import heroImg from '../assets/h2.png'

const Hero = () => {
  return (
      <div className='hero'>
          <div className="hero-text">
              <h4>Welcome to Realstate</h4>
              <h1>Manage Your Property</h1>
              <p>Your will have everything nearby supermarket, buses , station, the carmen neighborhood, etc</p>

              <div className="search">
                  <input type="email" placeholder='Enter your email' />
                  <button className="btn">get a quote</button>
              </div>
          </div>
          <div className="hero-image">
              <img src={heroImg} alt="" />
          </div>
    </div>
  )
}

export default Hero