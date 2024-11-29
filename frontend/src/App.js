import React from 'react'
import Homepage from './components/Homepage'
import { Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Homepage />} />
      </Routes>
    </div>
  )
}
