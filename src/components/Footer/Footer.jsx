import React from "react";
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
      return (
            <footer className="bg-gray-800 text-gray-300 py-10 relative bottom-[-110px]">
                  <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {/* About Section */}
                              <div className="text-center md:text-left">
                                    <h2 className="text-xl font-bold text-white mb-4">IshwarPs</h2>
                                    <p className="text-sm">
                                          A modern web solutions provider specializing in responsive and
                                          interactive web designs.
                                    </p>
                              </div>

                              {/* Quick Links */}
                              <div className="text-center">
                                    <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                                    <ul className="space-y-2">
                                          {["Home", "About", "Services", "Contact"].map((link) => (
                                                <li key={link} className="group relative transition-all duration-300">
                                                      <a
                                                            href={`#${link.toLowerCase()}`}
                                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                                      >
                                                            {/* Text that will flip and bounce on hover */}
                                                            <span className="block group-hover:flip-horizontal group-hover:opacity-0 transition-all duration-300 ease-in-out">
                                                                  {link}
                                                            </span>
                                                            {/* Duplicate text that will flip and bounce in */}
                                                            <span className="absolute left-[8rem] group-hover:flip-in opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out">
                                                                  {link}
                                                            </span>
                                                      </a>
                                                </li>
                                          ))}
                                    </ul>

                              </div>

                              {/* Social Media Links */}
                              <div className="text-center md:text-right">
                                    <h3 className="text-lg font-semibold text-white mb-4">
                                          Follow Us
                                    </h3>
                                    <div className="flex justify-center md:justify-end space-x-4">
                                          {[FiFacebook, FiTwitter, FiInstagram, FiLinkedin].map(
                                                (Icon, index) => (
                                                      <a
                                                            key={index}
                                                            href="#"
                                                            className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                                                      >
                                                            <Icon className="text-xl hover:scale-125 transition-transform duration-300" />
                                                      </a>
                                                )
                                          )}
                                    </div>
                              </div>
                        </div>
                        <div className="text-center text-gray-500 text-sm mt-10">
                              © {new Date().getFullYear()} IshwarPs. All rights reserved.
                        </div>
                  </div>
            </footer>
      );
};

export default Footer;
