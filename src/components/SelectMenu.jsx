// import React from 'react'

// export default function SelectMenu({ setRegion }) {
//   return (
//     <select>
//       <option value="">All Regions</option>
//       <option value="Africa">Africa</option>
//       <option value="America">America</option>
//       <option value="Asia">Asia</option>
//       <option value="Europe">Europe</option>
//       <option value="Oceania">Oceania</option>
//     </select>
//   )
// }

import React from 'react';

export default function SelectMenu({ setRegion }) {
  const handleSelect = (event) => {
    setRegion(event.target.value);
  };

  return (
    <select onClick={handleSelect}>
      <option value="">All Regions</option>
      <option value="Africa">Africa</option>
      <option value="America">America</option>
      <option value="Asia">Asia</option>
      <option value="Europe">Europe</option>
      <option value="Oceania">Oceania</option>
    </select>
  );
}
