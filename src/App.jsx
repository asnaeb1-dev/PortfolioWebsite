import React from 'react'
import Navbar from './components/ui/uicomponents/Navbar/Navbar'
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full h-full'>
      <Navbar />
      <Outlet />
    </div>
  )
}

export default App