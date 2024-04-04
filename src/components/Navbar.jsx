import React from 'react'

export default function Navbar({ isDark, setIsDark }) {
  return (
    <div className="w-full h-24 shadow-lg dark:shadow-neutral-500 flex items-center justify-between px-12 dark:bg-neutral-900 dark:text-white">
      <a href="/">Country Pedia</a>
      <div
        onClick={() => {
          setIsDark(!isDark)
          localStorage.setItem('darkXa', !isDark) 
        }}
        className="cursor-pointer"
      >
        Dark Mode
      </div>
    </div>
  )
}
