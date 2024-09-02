import React from 'react'
import './Brokrage.css'
import brokrage from '../assets/banner1.png'

const Brokrage = () => {
  return (
      <div className='brokrage'>
          <h2>We are a global, boutique real estate brokerage</h2>

          <div className="brokrage-container">
          <div className="brokrage-text">
              <h3>The transfer of real estate</h3>
              <p>Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc. Tellus consequat nisl quis nisl justo.</p>

              <div className="brokrage-btns">
                  <button className="btn">book now</button>
                  <button className="btn">read more</button>
              </div>

              <div className="count">
                  <div className="c1">
                      <h1>12+</h1>
                      <p>Customers</p>
                  </div>
                  <div className="c1">
                      <h1>14+</h1>
                      <p>Offices</p>
                  </div>
                  <div className="c1">
                      <h1>10+</h1>
                      <p>Students</p>
                  </div>
              </div>
          </div>
          <div className="brokrage-image">
              <img src={brokrage} alt="" />
              </div>
              </div>
    </div>
  )
}

export default Brokrage