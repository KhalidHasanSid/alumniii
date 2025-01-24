/*uguyfufhgfhgf*/
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white text-black">
      <nav className="flex justify-between items-center px-4 py-3 md:px-8">
       
        <div>
          <Image src="/logo.png" width={200} height={100} alt="Logo" />
        </div>

        <div
          className="cursor-pointer md:hidden "
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-8 h-[2px] bg-black mb-1"></span>
          <span className="block w-8 h-[2px] bg-black mb-1"></span>
          <span className="block w-8 h-[2px] bg-black"></span>
        </div>

       
        <div
          className={`fixed top-0 left-0 h-full w-[75%] bg-white z-50 transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 md:relative md:transform-none md:flex md:h-auto md:w-auto md:bg-transparent`}
        >
          <button
            className="absolute top-4 right-4 text-black md:hidden"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <ul className="flex flex-col md:flex-row md:gap-[4vw] gap-4 md:justify-end justify-center items-start md:items-center px-5 py-10 md:p-0">
            <li>
              <Link
                href="/ssuet"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                MY SSUET
              </Link>
            </li>
            <li>
              <Link
                href="/form"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline whitespace-nowrap"
              >
                NEW ALUMNI
              </Link>
            </li>
            <li className="hover:underline whitespace-nowrap">EVENTS</li>
            <li className="hover:underline whitespace-nowrap">
              ALUMNI GROUPS
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}