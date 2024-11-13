import React from "react";
import { IoIosSearch } from "react-icons/io";

export default function Search({ setSearchQuery }) {
  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };
  return (
    <div className="w-[1500px] h-16 text-[#757575] text-2xl font-bold font-jakarta flex items-center justify-between border rounded-full px-4 shadow-lg dark:bg-neutral-600">
      <input
        type="text"
        onChange={handleChange}
        className="w-full h-full px-3 py-1 dark:bg-neutral-600 border-none rounded-full"
        placeholder="Search by country name"
      />
      <div className="">
        <IoIosSearch />
      </div>
    </div>
  );
}
