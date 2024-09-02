import React from 'react'
import './Message.css'
import MessageCard from './MessageCard'
import message from '../assets/message.png'
import sms from '../assets/sms.png'
import edit from '../assets/edit.png'

const Message = (props) => {
  return (
      <div className='message'>
          <h4>Three steps. Three minutes.</h4>
          <h2>Everything should be this easy.</h2>

          <div className="cards">
              <MessageCard
                  img={message}
                  heading='Answer questions'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. '
              />

                <MessageCard
                  img={sms}
                  heading='Select a quote'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. '
              />

<MessageCard
                  img={edit}
                  heading='Get registered'
                  text = 'Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. '
              />
          </div>
    </div>
  )
}

export default Message