import React, { useState } from "react";
import CountriesList from "../components/CountriesList";
import Search from "../components/Search";
import SelectMenu from "../components/SelectMenu";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [region, setRegion] = useState("");
  console.log("region: ", region);
  return (
    <div className="dark:bg-neutral-900 dark:text-white px-12">
      <div className="h-24 flex items-center justify-center">
        <Search setSearchQuery={setSearchQuery} />
      </div>
      <div className="ml-16 my-2">
        <h1 className="text-2xl font-bold font-jakarta mb-4">List of All Countries</h1>
        <SelectMenu setRegion={setRegion}/>
      </div>
      <CountriesList searchQuery={searchQuery} region={region} />
    </div>
  );
}
