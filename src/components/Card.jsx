import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ name, population, flag, capital, region, data }) {
  return (
    <Link
      state={data}
      to={`/${name}`}
      className="w-80  rounded-lg h-96 m-8 shadow-2xl dark:shadow-gray-500"
    >
      <div className="flex items-center justify-center w-full p-2">
        <img src={flag} alt={name} className="h-40 " />
      </div>
      <div className="flex flex-col p-2 text-xl">
        <h4 className="my-1">
          <span className="font-bold">Name:</span> {name}
        </h4>
        <h4 className="my-1">
          <span className="font-bold">Population:</span> {population}
        </h4>
        <h4 className="my-1">
          <span className="font-bold">Capital:</span> {capital && capital[0]}
        </h4>
        <h4 className="my-1">
          <span className="font-bold">Region:</span> {region}
        </h4>
      </div>
    </Link>
  )
}
