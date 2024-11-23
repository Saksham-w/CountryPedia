import React, { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";

export default function CountryPage() {
  const [countryData, setCountryData] = useState(null);
  const [borders, setBorders] = useState([]);

  const { state } = useLocation();
  const { country } = useParams();

  function functionToSetCountryData(countryData) {
    setCountryData(countryData);

    if (countryData.borders) {
      countryData.borders.map((border) => {
        fetch(`https://restcountries.com/v3.1/alpha/${border}`)
          .then((res) => res.json())
          .then(([data]) => {
            setBorders((prev) => [...prev, data.name.common]);
          });
      });
    }
  }

  useEffect(() => {
    setBorders([]);

    if (state) {
      functionToSetCountryData(state);
      return;
    }

    fetch(`https://restcountries.com/v3.1/name/${country}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        functionToSetCountryData(data);
      });
  }, [country]);

  return (
    <div className="py-12 px-10 h-screen bg-white dark:bg-neutral-900 dark:text-white transition-all">
      {countryData === null ? (
        <div className="flex justify-center items-center h-full">
          <p className="text-lg text-gray-700 dark:text-gray-300">Loading...</p>
        </div>
      ) : (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 p-6 bg-white shadow-2xl rounded-lg dark:bg-gray-800">
          <div className="flex justify-center items-center lg:w-1/3">
            <img
              src={countryData.flags.svg}
              alt={countryData.flags.alt || `${countryData.name.common} flag`}
              className="h-80 rounded-md border-2 shadow-md"
            />
          </div>

          <div className="lg:w-2/3 flex flex-col justify-between">
            <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">
              {countryData.name.common}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 text-lg text-gray-700 dark:text-gray-300">
              <h4>
                <span className="font-semibold">Native Name: </span>
                {countryData.name.nativeName
                  ? Object.values(countryData.name.nativeName)[0].common
                  : "N/A"}
              </h4>
              <h4>
                <span className="font-semibold">Capital: </span>
                {countryData.capital || "N/A"}
              </h4>
              <h4>
                <span className="font-semibold">Region: </span>
                {countryData.region}
              </h4>
              <h4>
                <span className="font-semibold">Sub-region: </span>
                {countryData.subregion || "N/A"}
              </h4>
              <h4>
                <span className="font-semibold">Population: </span>
                {countryData.population.toLocaleString("en-IN")}
              </h4>
              <h4>
                <span className="font-semibold">Top Level Domain: </span>
                {countryData.tld[0]}
              </h4>
              <h4>
                <span className="font-semibold">Currencies: </span>
                {Object.values(countryData.currencies).map((obj, index) => (
                  <span key={index}>
                    {obj.name} ({obj.symbol})
                  </span>
                ))}
              </h4>
              <h4>
                <span className="font-semibold">Languages: </span>
                {Object.values(countryData.languages).join(", ")}
              </h4>
            </div>

            {borders.length > 0 && (
              <div className="mt-6">
                <h4 className="font-semibold text-gray-800 dark:text-white mb-2">
                  Border Countries:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {borders.map((border, index) => (
                    <Link
                      to={`/${border}`}
                      key={index}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-full border hover:bg-gray-200 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:hover:bg-gray-600 transition"
                    >
                      {border}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
