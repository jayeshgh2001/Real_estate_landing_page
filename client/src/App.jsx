import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Message from './components/Message'
import Project from './components/Project'
import Brokrage from './components/Brokrage'
import Banner from './components/Banner'

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <Hero />
      <Message />
      <Project />
      <Brokrage />
      <Banner/>
    </div>
  )
}

export default App