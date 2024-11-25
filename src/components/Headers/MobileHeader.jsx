import React, { useState } from "react";
import Navbar from "../Navbar";
import Logo from "../Logo";

const ResponsiveHeader = () => {
      const [isOpen, setIsOpen] = useState(false);

      return (
            <header className="bg-random shadow-md p-4 py-10 sticky top-0 z-50">
                  <div className="container mx-auto flex justify-between items-center">
                        <Logo />
                        <button
                              onClick={() => setIsOpen(!isOpen)}
                              className="md:hidden text-gray-600 text-3xl"  >
                              {isOpen ? "✕" : "☰"} {/* Add dynamic icons if preferred */}
                        </button>
                        <Navbar />
                  </div>
            </header>
      );
};

export default ResponsiveHeader;
