import React from "react";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import Link from "next/link";

export default function Header2() {
  return (
    <div className="fle bg-white h-auto h-[140px] sm-pt-2 flex flex-wrap items-center justify-between sm-px-4 sm:px-12">
      {/* Logo Section */}
      <div className="sm-w-full sm:w-auto flex justify-center sm:justify-start sm-pb-4 sm:pb-0">
        <img src="logo.png" alt="Logo" className="w-64 sm:w-80 h-auto" />
      </div>

      {/* Navigation Section */}
      <ul className="flex flex-wrap gap-4 sm:gap-8 text-[#521e89] text-sm sm:text-lg items-center">
        {/* QUAD NEWS with Dropdown */}
        <li className="relative group hover:underline cursor-pointer flex items-center">
          QUAD NEWS
          <FaChevronDown className="ml-2 text-xs sm:text-sm " />
          {/* Dropdown Menu */}
          <ul className="absolute hidden group-hover:block bg-[#a460ee] text-white mt-[250] pt-2 rounded shadow-lg w-40">
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">News</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Interviews</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Features</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Opinion</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">QUADcast</li>
          </ul>
        </li>

        {/* Other Items */}
        <li>
          <Link
            href="/ssuet"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            MY SSUET
          </Link>
        </li>
        <li>
          <Link
            href="/form"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline cursor-pointer"
          >
            NEW ALUMNI
          </Link>
        </li>
        <li className="hover:underline cursor-pointer">EVENTS
       
        </li>
        <li className="hover:underline cursor-pointer">ALUMNI GROUPS</li>

        {/* ENGAGE with Dropdown */}
        <li className="relative group hover:underline cursor-pointer flex items-center">
          ENGAGE
          <FaChevronDown className="ml-2 text-xs sm:text-sm" />
          {/* Dropdown Menu */}
          <ul className="absolute hidden group-hover:block bg-[#a460ee] text-white mt-[350] pt-2 rounded shadow-lg w-64">
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Alumni Board</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Book Club</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Distinguished Friend of Oxford</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Offer an Internship</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Crankstart Careers Mentoring Programme</li>
            <li className="p-2 hover:bg-[#8041c4] cursor-pointer">Donate</li>
          </ul>
        </li>
      </ul>

      {/* Search Section */}
      <div className="flex items-center bg-white rounded-md mt-4 sm:mt-0">
        <FaSearch className="text-[#521e89] ml-2 mr-2" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent text-[#521e89] placeholder-[#521e89] outline-none w-40 sm:w-64"
        />
      </div>
    </div>
  );
}