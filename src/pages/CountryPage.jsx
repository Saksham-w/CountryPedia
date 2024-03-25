import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function CountryPage() {
  const [countryData, setCountryData] = useState(null)
  const { country } = useParams()

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        setCountryData(data)
      })
  }, [])

  console.log(countryData)

  return (
    <div className="py-12 px-10">
      {countryData === null ? (
        'Loading...'
      ) : (
        <div className="flex flex-col lg:flex-row gap-10">
          <div id="flag">
            <img
              src={countryData.flags.svg}
              alt={countryData.flags.alt}
              className="h-80 rounded-md border-2"
            />
          </div>
          <div id="details">
            <h1 className="text-3xl font-bold">{countryData.name.common}</h1>
            <div>
              <h4>
                <span className="font-bold">Native Name: </span>
                {countryData.name.nativeName
                  ? Object.values(countryData.name.nativeName)[0].common
                  : ''}
              </h4>
              {countryData.capital && (
                <h4>
                  <span className="font-bold">Capital: </span>
                  {countryData.capital}
                </h4>
              )}
              <h4>
                <span className="font-bold">Region: </span>
                {countryData.region}
              </h4>
              {countryData.subregion && (
                <h4>
                  <span className="font-bold">Sub-region: </span>
                  {countryData.subregion}
                </h4>
              )}
              <h4>
                <span className="font-bold">Population: </span>
                {countryData.population.toLocaleString('en-IN')}
              </h4>
              <h4>
                <span className="font-bold">Top level domain: </span>
                {countryData.tld[0]}
              </h4>
              <h4>
                <span className="font-bold">Currencies: </span>
                {Object.values(countryData.currencies).map((obj) => {
                  return (
                    <span key={obj}>
                      {obj.name} ({obj.symbol})
                    </span>
                  )
                })}
              </h4>
              <h4>
                <span className="font-bold">Languages: </span>
                {Object.values(countryData.languages).join(', ')}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
