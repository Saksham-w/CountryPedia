import React, { Fragment, useEffect, useState } from "react";
import Card from "./Card";
import { data } from "autoprefixer";

export default function CountriesList({ searchQuery, region }) {
  const [allCountries, setAllCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,population,flags,capital,region")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          setAllCountries(data);
        } else {
          setAllCountries([]);
        }
      })
      .catch(() => setAllCountries([]));
  }, []);
  return (
    <div className=" w-full min-h-screen p-4">
      {Array.isArray(allCountries) && allCountries.length !== 0 ? (
        <div className="flex flex-wrap items-center justify-center gap-4">
          {allCountries
            .filter((country) => {
              return country.name?.common
                ?.toLowerCase()
                .includes(searchQuery.toLowerCase());
            })
            .filter((country) => {
              return country.region
                ?.toLowerCase()
                .includes(region.toLowerCase());
            })
            .map((country) => {
              return (
                <Fragment key={country.name.common}>
                  <Card
                    name={country.name.common}
                    population={country.population}
                    flag={country.flags.svg}
                    capital={country.capital?.[0] || "N/A"}
                    region={country.region}
                    data={country}
                  />
                </Fragment>
              );
            })}
        </div>
      ) : (
        "Loading..."
      )}
    </div>
  );
}
