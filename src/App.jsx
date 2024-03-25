import React from 'react'
import HomePage from './pages/HomePage'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}
