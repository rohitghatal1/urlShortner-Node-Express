import React from 'react'
import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './components/About'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/urlshortner' element='#' />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}
