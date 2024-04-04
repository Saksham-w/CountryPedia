import React, { useEffect, useState } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function CountryPage() {
  const [countryData, setCountryData] = useState(null)
  const [borders, setBorders] = useState([])

  const { state } = useLocation()
  const { country } = useParams()

  console.log('state aako xa: ', state)

  function functionToSetCountryData(countryData) {
    setCountryData(countryData)

    if (countryData.borders) {
      countryData.borders.map((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([data]) => {
            setBorders((prev) => [...prev, data.name.common])
          })
      })
    }
  }

  useEffect(() => {
    setBorders([])

    if(state){
      functionToSetCountryData(state)
      return
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        functionToSetCountryData(data)
      })
  }, [country])

  return (
    <div className="py-12 px-10 h-screen dark:bg-neutral-900 dark:text-white">
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

            {borders.length !== 0 && (
              <div>
                <span className="font-bold">Borders: </span>
                {borders.map((border, index) => {
                  return (
                    <Link
                      to={`/${border}`}
                      key={index}
                      className="border p-1 m-1"
                    >
                      {border}
                    </Link>
                  )
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
