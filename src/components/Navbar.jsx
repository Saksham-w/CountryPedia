import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar({ isDark, setIsDark }) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div
      className={`w-full relative ${
        isHomepage ? "h-96" : "h-28"
      } bg-[#E9ECEF] flex flex-col sm:flex-row justify-center sm:justify-start items-center px-4 sm:px-12 dark:bg-neutral-900 dark:text-white font-jakarta`}
    >
      <div
        className={`${
          isHomepage ? "h-24 w-24 sm:h-32 sm:w-32" : "h-8 w-12 sm:h-16 sm:w-16 mt-8 sm:mt-0"
        } ml-0 sm:ml-10`}
      >
        <img src={Logo} alt="CountryPedia Logo" className="object-contain" />
      </div>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left justify-between py-4 sm:py-10 px-4">
        <a href="/">
          <div
            className={`${
              isHomepage
                ? "text-3xl sm:text-5xl font-bold"
                : "text-2xl sm:text-3xl font-bold"
            }`}
          >
            CountryPedia
          </div>
        </a>
        <h1
          className={`${
            isHomepage
              ? "text-lg sm:text-4xl font-medium text-[#868E96]"
              : "text-sm sm:text-2xl font-medium text-[#868E96]"
          }`}
        >
          An application where you can see all countries
        </h1>
      </div>

      <div
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("darkXa", !isDark);
        }}
        className="cursor-pointer absolute top-4 right-4 sm:top-6 sm:right-6"
      >
        {isDark ? <FiSun size={25} /> : <MdOutlineDarkMode size={25} />}
      </div>
    </div>
  );
}
