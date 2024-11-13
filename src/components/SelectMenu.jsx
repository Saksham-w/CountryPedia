import React from 'react';

export default function SelectMenu({ setRegion }) {
  const handleSelect = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div className=''>
    <select onClick={handleSelect} className='rounded-full w-40 h-8 bg-[#e8edef] dark:bg-neutral-600'>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
    </div>
  );
}
