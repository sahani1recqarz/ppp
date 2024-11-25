import React from 'react'

const Logo = () => {
      return (
            <div>
                  <div className="group relative text-3xl font-bold text-blue-600">
                        {/* Default Logo */}
                        <span className="block group-hover:translate-y-[-100%] group-hover:opacity-0 transition-all duration-500 ease-in-out">
                              Logo
                        </span>

                        {/* Hovered Name */}
                        <span className="absolute top-0 left-0 group-hover:translate-y-0 translate-y-[100%] opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                              IshwarPs
                        </span>
                  </div>
            </div>
      )
}

export default Logo
