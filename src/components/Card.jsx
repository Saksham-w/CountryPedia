import React from 'react';
import { Link } from 'react-router-dom';

export default function Card({ name, population, flag, capital, region, data }) {
  return (
    <Link
      state={data}
      to={`/${name}`}
      className="w-80 rounded-lg h-96 m-8 shadow-xl dark:shadow-gray-500 bg-white dark:bg-gray-800 hover:scale-105 transform transition duration-300 ease-in-out"
    >
      <div className="relative w-full h-40 overflow-hidden rounded-t-lg">
        <img
          src={flag}
          alt={`${name} flag`}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex flex-col p-4 space-y-3 text-gray-700 dark:text-gray-200">
        <h4 className="font-bold text-lg text-gray-800 dark:text-white">{name}</h4>
        <p>
          <span className="font-semibold">Population:</span>{' '}
          {population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Capital:</span>{' '}
          {capital ? capital[0] : 'N/A'}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {region}
        </p>
      </div>

      <div className="w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-b-lg" />
    </Link>
  );
}
