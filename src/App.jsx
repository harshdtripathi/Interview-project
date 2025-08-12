import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import Questions from './pages/Questions'

function App() {
  
  return (
    <div className='w-full  overflow-x-hidden  '>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Add other routes here as needed */}
     
       <Route path="/questions" element={<Questions />} />
        {/* Add other routes here as needed */}
      </Routes>

     

    </div>
  )
}

export default App
