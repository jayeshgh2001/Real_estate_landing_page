import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaStarHalfStroke } from "react-icons/fa6";

import './Project.css'

const ProjectCard = (props) => {
  return (
      <div className='p-card'>
        <img src={props.img} alt="" />
        <div className="card-text">
          <h3>{props.heading}</h3>
          <p>{props.text}</p>
          <div className="rating">
              <div className="stars">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfStroke />
              </div>
              4.83
            </div>
        </div>

    </div>
  )
}

export default ProjectCard