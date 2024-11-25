import React from "react";

const StickyHeader = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-lg p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-600 text-2xl font-bold">Logo</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-700 hover:text-blue-600">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </header>
  );
};

export default StickyHeader;
