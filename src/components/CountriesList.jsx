import React, { Fragment, useEffect, useState } from 'react'
import Card from './Card'

export default function CountriesList({ searchQuery,region }) {
  const [allCountries, setAllCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((res) => res.json())
      .then((data) => {
        setAllCountries(data)
      })
  }, [])
  return (
    <div className="">
      {allCountries.length !== 0 ? (
        <div className="flex flex-wrap items-center justify-center">
          {allCountries
            .filter((country) => {
              return country.name.common
                .toLowerCase()
                .includes(searchQuery.toLowerCase())
            })
            .filter((country) => {
              return country.region.toLowerCase().includes(region.toLowerCase())
            })
            .map((country) => {
              return (
                <Fragment key={country.name.common}>
                  <Card
                    name={country.name.common}
                    population={country.population}
                    flag={country.flags.svg}
                    capital={country.capital}
                    region={country.region}
                  />
                </Fragment>
              )
            })}
        </div>
      ) : (
        'Loading...'
      )}
    </div>
  )
}
