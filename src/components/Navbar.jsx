import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiImage, FiMail } from "react-icons/fi";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);
      return (
            <div>
                  <nav
                        className={`${isOpen ? "block" : "hidden"
                              } md:flex space-x-6 absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none`}
                  >
                        <ul className="md:flex space-y-4 md:space-y-0 md:space-x-20">
                              {/* Home */}
                              <li className="group relative">
                                    <NavLink
                                          to="/home"
                                          className={({isActive}) => `flex items-center font-[600] text-[1.5em]  ${isActive ?"text-orange-600" :"text-gray-700"} transition-colors duration-300`}
                                    >
                                          <span
                                                className="block group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out w-[70px] text-center"
                                          >
                                                Home
                                          </span>
                                          <FiHome
                                                className="absolute text-3xl transition-opacity duration-300 ease-in-out delay-300 opacity-0 group-hover:opacity-100"
                                                style={{ left: "1.5rem" }}
                                          />
                                    </NavLink>
                              </li>

                              {/* About */}
                              <li className="group relative">
                                    <NavLink
                                          to="/about"
                                          className={({isActive}) => `flex items-center font-[600] text-[1.5em]  ${isActive ?"text-orange-600" :"text-gray-700"} transition-colors duration-300`}
                                    >
                                          <span
                                                className="block group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out w-[70px] text-center"
                                          >
                                                About
                                          </span>
                                          <FiInfo
                                                className="absolute text-3xl transition-opacity duration-300 ease-in-out delay-300 opacity-0 group-hover:opacity-100"
                                                style={{ left: "1.5rem" }}
                                          />
                                    </NavLink>
                              </li>

                              {/* Gallery */}
                              <li className="group relative">
                                    <NavLink
                                          to="/gallery"
                                          className={({isActive}) => `flex items-center font-[600] text-[1.5em]  ${isActive ?"text-orange-600" :"text-gray-700"} transition-colors duration-300`}
                                    >
                                          <span
                                                className="block group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out w-[70px] text-center"
                                          >
                                                Gallery
                                          </span>
                                          <FiImage
                                                className="absolute text-3xl transition-opacity duration-300 ease-in-out delay-300 opacity-0 group-hover:opacity-100"
                                                style={{ left: "1.5rem" }}
                                          />
                                    </NavLink>
                              </li>

                              {/* Contact */}
                              <li className="group relative">
                                    <NavLink
                                          to="/contact"
                                          className={({isActive}) => `flex items-center font-[600] text-[1.5em]  ${isActive ?"text-orange-600" :"text-gray-700"} transition-colors duration-300`}
                                    >
                                          <span
                                                className="block group-hover:opacity-0 group-hover:translate-y-[-10px] transition-all duration-300 ease-in-out w-[70px] text-center"
                                          >
                                                Contact
                                          </span>
                                          <FiMail
                                                className="absolute text-3xl transition-opacity duration-300 ease-in-out delay-300 opacity-0 group-hover:opacity-100"
                                                style={{ left: "1.5rem" }}
                                          />
                                    </NavLink>
                              </li>
                        </ul>
                  </nav>
            </div>
      )
}

export default Navbar
