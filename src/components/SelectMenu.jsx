import React from 'react';

export default function SelectMenu({ setRegion }) {
  const handleSelect = (event) => {
    setRegion(event.target.value);
  };

  return (
    <div className="w-full pr-6">
      <select
        onChange={handleSelect} 
        className="rounded-full  w-full sm:w-40 h-10 sm:h-8 bg-[#e8edef] dark:bg-neutral-600 px-4 text-sm sm:text-base"
      >
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
