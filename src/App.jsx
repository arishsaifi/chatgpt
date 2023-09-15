import React from 'react'
import './App.css'

import { Blog, Chatgpt, Header, Footer, Features, Possibility } from './containers'
import { Brand, CTA, Navbar } from './components'

const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Chatgpt />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App