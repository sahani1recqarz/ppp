import React from "react";

const TransparentHeader = () => {
  return (
    <header className="absolute top-0 w-full bg-black bg-opacity-50 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">BrandName</div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#" className="hover:text-yellow-300">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Portfolio
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-yellow-300">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default TransparentHeader;
