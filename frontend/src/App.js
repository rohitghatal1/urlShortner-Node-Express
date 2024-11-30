import React from 'react'
import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}
