"use client";

import Image from "next/image";
import { useState } from "react";
import Logo from "@/utils/logo.svg";
import Link from "next/link";
import { useDarkMode } from "@/context/DarkModeProvider";

export const Header: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>("Home");
  const [isOpen, setIsOpen] = useState(false);
  const { darkMode, toggleDarkMode } = useDarkMode();

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const navItems = ["Home", "About Us", "Pricing", "Features"];
  const genericHamburgerLine = `h-[3px] w-6 my-[2px] rounded-full bg-black transition ease transform duration-300 ${
    darkMode ? "bg-white" : "bg-black"
  } `;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between py-8 px-3 sm:px-0 md:px-6 lg:px-0">
        <nav className="w-full cursor-pointer flex justify-between">
          <ul className="md:flex md:items-center gap-10 text-[1.1rem] ">
            <li className="flex justify-center items-center gap-3 mr-10">
              <Image src={Logo} width={40} height={40} alt="logo" />
              <span className="relative font-bold text-[2rem]">
                uifry
                <span className="absolute text-[0.4rem] font-semibold top-2">
                  TM
                </span>
              </span>
            </li>
            {navItems.map((item) => (
              <li
                key={item}
                className={`${
                  activeItem === item ? "text-[#FF5555] font-extrabold" : ""
                } text-xl hover:text-[#FF5555] transition duration-300 ease-in-out hidden md:block`}
                onClick={() => handleItemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* mobile */}
          <button
            className="md:hidden z-20 flex flex-col h-12 w-12 justify-center items-center group"
            onClick={handleClick}
          >
            <div
              className={`${genericHamburgerLine} ${
                isOpen
                  ? "rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
            <div
              className={` z-20 ${genericHamburgerLine} ${
                isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
              }`}
            />
            <div
              className={` z-20 ${genericHamburgerLine} ${
                isOpen
                  ? "-rotate-45 -translate-y-[7px] opacity-50 group-hover:opacity-100"
                  : "opacity-70 group-hover:opacity-100"
              }`}
            />
          </button>

          <ul
            className={`fixed right-0 top-0 h-full w-full z-50 transition-transform duration-300 ease-in-out transform ${
              isOpen ? "translate-x-0" : "translate-x-full"
            } ${darkMode ? "bg-black text-white" : " bg-white text-black"}`}
          >
            <button
              className="md:hidden z-20 flex flex-col h-12 w-12 justify-center items-center group absolute right-3 top-3"
              onClick={handleClick}
            >
              <div
                className={`${genericHamburgerLine} ${
                  isOpen
                    ? "rotate-45 translate-y-[7px] opacity-50 group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={` z-20 ${genericHamburgerLine} ${
                  isOpen ? "opacity-0" : "opacity-70 group-hover:opacity-100"
                }`}
              />
              <div
                className={` z-20 ${genericHamburgerLine} ${
                  isOpen
                    ? "-rotate-45 -translate-y-[7px] opacity-50 group-hover:opacity-100"
                    : "opacity-70 group-hover:opacity-100"
                }`}
              />
            </button>
            <div className="mt-[6rem] flex flex-col items-center">
              {navItems.map((item) => (
                <li
                  key={item}
                  className={`${
                    activeItem === item ? "text-[#FF5555] font-extrabold" : ""
                  } text-xl hover:text-[#FF5555] transition duration-300 ease-in-out w-full`}
                  onClick={() => handleItemClick(item)}
                >
                  <Link href={"#"} onClick={handleClick}>
                    <div className="flex items-center justify-center p-4 px-6 transition-all duration-600 text-xl w-full">
                      <div className="flex items-center justify-center">
                        <span className="font-semibold text-xl">{item}</span>
                      </div>
                    </div>
                  </Link>
                  <hr className="w-1/2 border-t-2 border-gray-200 mx-auto my-4" />
                </li>
              ))}
              <button
                className={`block text-base rounded-md px-8 py-3 sm:px-12 sm:py-4 hover:bg-[#FF5555] transition duration-300 ease-in-out ${
                  darkMode ? "bg-white text-black" : " bg-[#000000] text-white"
                }`}
              >
                Download
              </button>
            </div>
          </ul>
        </nav>
        <div className="flex items-center gap-4">
          <button
            className={`hidden md:block text-base rounded-md px-8 py-3 sm:px-5 sm:py-2 hover:bg-[#FF5555] transition duration-300 ease-in-out ${
              darkMode ? "bg-white text-black" : " bg-[#000000] text-white"
            }`}
          >
            Download
          </button>

          {/* Darkmode */}
          <button
            onClick={toggleDarkMode}
            className="text-base text-white rounded-full bg-[#000000] px-2 py-2 hover:bg-[#FF5555] transition duration-300 ease-in-out"
          >
            <label className="relative cursor-pointer" htmlFor="light-switch">
              <svg
                className="dark:hidden"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z"
                />
                <path
                  className="fill-white"
                  d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z"
                />
              </svg>
              <svg
                className="hidden dark:block"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="fill-white"
                  d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z"
                />
                <path
                  className="fill-white"
                  d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z"
                />
              </svg>
            </label>
          </button>
        </div>
      </div>
    </div>
  );
};
