import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Viewaccident from './pages/Viewaccident'
import Sidebar from './components/Sidebar'


function App() {
  return (
    <div className="grid grid-cols-4  gap-4">
      <div className="col-span-1">
        <Sidebar />
      </div>
      <div className="col-span-3 ml-10 h-screen">
        <Routes>
        <Route path="/" element={<Viewaccident />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
