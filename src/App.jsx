import './App.css'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing'
import StudentDetail from './pages/StudentDetail'
import CreatePoll from './pages/CreatePoll'

function App() {
  
  return (
    <div className='w-full  overflow-x-hidden  '>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/student" element={<StudentDetail />} />
        <Route path="/teacher" element={<CreatePoll />} />
      </Routes>
    </div>
  )
}

export default App
