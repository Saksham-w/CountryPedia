import React, { useState } from 'react'
import CountriesList from '../components/CountriesList'
import Search from '../components/Search'
import SelectMenu from '../components/SelectMenu'

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [region, setRegion] = useState('')
  console.log('region: ',region)
  return (
    <div className='dark:bg-neutral-900 dark:text-white'>
      <div className="h-24 flex items-center justify-between px-12">
        <Search setSearchQuery={setSearchQuery} />
        <SelectMenu setRegion={setRegion} />
      </div>
      <CountriesList searchQuery={searchQuery} region={region} />
    </div>
  )
}
