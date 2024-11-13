import React from "react";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";

export default function Navbar({ isDark, setIsDark }) {
  const location = useLocation();
  const isHomepage = location.pathname === "/";

  return (
    <div className={`w-full relative ${isHomepage ? "h-96" : "h-28"} bg-[#E9ECEF] flex justify-start items-center px-12 dark:bg-neutral-900 dark:text-white font-jakarta`}>
      <div className={`${isHomepage ?"h-24 w-24 ml-10" : "h-12 w-12 ml-10"} `}>
        <img src={Logo} alt="error" />
      </div>
      <div className="flex flex-col items-start justify-between py-10 px-4">
        <a href="/">
          <div className={`${isHomepage ? "text-5xl font-bold": "text-3xl font-bold"} `}>CountryPedia</div>
        </a>
        <h1 className={`${isHomepage ? "text-4xl font-medium text-[#868E96]" : "text-2xl font-medium  text-[#868E96]"}`}>
          An application where you can see all countries
        </h1>
      </div>
      <div
        onClick={() => {
          setIsDark(!isDark);
          localStorage.setItem("darkXa", !isDark);
        }}
        className="cursor-pointer absolute top-4 right-4"
      >
        {isDark ? <FiSun size={25} /> : <MdOutlineDarkMode size={25} />}
      </div>
    </div>
  );
}
