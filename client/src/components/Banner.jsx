import React from 'react'
import './Banner.css'
import banner from '../assets/h5.png'

const Banner = () => {
  return (
      <div className='banner'>
          <div className="banner-text">
              <h2>Subscribe Our Newsletter</h2>
              <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.</p>
              <div className="search">
                  <input type="email" placeholder='Enter your email' />
                  <button className="btn">get a quote</button>
              </div>
          </div>
          <div className="banner-image">
              <img src={banner} alt="" />
          </div>
    </div>
  )
}

export default Banner