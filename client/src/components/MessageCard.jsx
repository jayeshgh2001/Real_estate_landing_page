import React from 'react'
import './Message.css'

const MessageCard = (props) => {
  return (
      <div className='card'>
          <div className="icon">
          <img src={props.img} alt="" />
          </div>
          <h3>{props.heading}</h3>
          <p>{props.text}</p>
    </div>
  )
}

export default MessageCard