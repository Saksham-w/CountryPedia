import React from 'react'

export default function Search({ setSearchQuery }) {
  return (
    <div>
      <input
        type="text"
        onChange={(e) => {
          setSearchQuery(e.target.value)
        }}
        className="w-[500px] h-11 rounded-md px-3 py-1 border "
        placeholder="Seach by country name ..."
      />
    </div>
  )
}
