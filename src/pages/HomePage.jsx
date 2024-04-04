import React, { useState } from 'react'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
import SelectMenu from '../components/SelectMenu'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  return (
    <div className='dark:bg-neutral-900 dark:text-white'>
      <div className="h-24 flex items-center justify-between px-12">
        <Search setSearchQuery={setSearchQuery} />
        <SelectMenu />
      </div>
      <CountriesList searchQuery={searchQuery} />
    </div>
  )
}
