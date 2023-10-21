import React from "react";
import { useNavbar } from "../hooks/useNavbar";

export const Navbar = () => {
  const { menuOpen, toggleMenu, tab, githubLink } = useNavbar();

  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-900 p-5">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img src="../../images/ocarina_2.png" alt="icone triforce" />
        <span className="font-semibold text-xl tracking-tight ms-2">Tracker d'Alex</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <ul className="text-sm lg:flex-grow">
          {tab.map((link, index) => (
            <li className="text-sm lg:inline-block hidden" key={index}>
              {link.element}
            </li>
          ))}
        </ul>
        <div>{githubLink}</div>
      </div>
      <ul
        className={` ${menuOpen ? "lg:hidden block" : "hidden"} mt-4 md:mt-0`}
      >
        {tab.map((link, index) => (
          <li key={index}>{link.element}</li>
        ))}
      </ul>
    </nav>
  );
};
