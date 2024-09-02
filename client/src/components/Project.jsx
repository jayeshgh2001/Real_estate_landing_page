import React from 'react'
import './Project.css'
import ProjectCard from './ProjectCard'
import h1 from '../assets/h3.png'
import h2 from '../assets/h4.png'
import h3 from '../assets/h1.png'


const Project = () => {
  return (
      <div className='project'>
          <h4>Best Project of the Years</h4>
          <h2>Our recent projects</h2>

          <div className="p-cards">
              <ProjectCard
                  img={h1}
                  heading='Sobha Hearland II Villas'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.'
              />

                <ProjectCard
                  img={h2}
                  heading='Sobha Hearland II Villas'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.'
                />

                <ProjectCard
                  img={h3}
                  heading='Sobha Hearland II Villas'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum.'
                />
          </div>
    </div>
  )
}

export default Project