import React from "react";
import { NavLink } from "react-router-dom";
const BasicHeader = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-blue-400 shadow-md">
      <div className="text-white text-2xl font-bold">MySite</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <NavLink href="#" className={({isActive}) => `text-white hover:text-blue-100  ${isActive ? "text-orange-700" : "text-gray-700"} `}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-blue-100">
              About
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-blue-100">
              Services
            </NavLink>
          </li>
          <li>
            <NavLink href="#" className="text-white hover:text-blue-100">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      <a
        href="#signup"
        className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-blue-100"
      >
        Sign Up
      </a>
    </header>
  );
};

export default BasicHeader;
