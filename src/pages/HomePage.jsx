import React, { useState } from "react";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import SelectMenu from "../components/SelectMenu";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  console.log("region: ", region);

  return (
    <div className="dark:bg-neutral-900 dark:text-white px-4 sm:px-12 h-full w-full">
      {/* Search Section */}
      <div className="h-24 w-full flex items-center justify-center">
        <Search setSearchQuery={setSearchQuery} />
      </div>

      <div className=" ml-4 w-full my-2">
        <h1 className="text-2xl sm:text-3xl font-bold font-jakarta mb-4">
          List of All Countries
        </h1>
        <SelectMenu setRegion={setRegion} />
      </div>

      <CountriesList searchQuery={searchQuery} region={region} />
    </div>
  );
}
