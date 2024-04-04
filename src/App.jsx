import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

export default function App() {
  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem('darkXa')) || false
  )
  return (
    <div className={`${isDark === true ? 'dark' : ''}`}>
      <Navbar isDark={isDark} setIsDark={setIsDark} />
      <Outlet />
    </div>
  )
}
