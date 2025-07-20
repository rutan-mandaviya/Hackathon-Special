import React from 'react'
import { ShoppingCart } from "lucide-react"


const Navigation = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-6 relative z-10">
      {/* Left Navigation */}
      <div className="flex items-center space-x-8">
        <button className="text-gray-600 hover:text-gray-800 text-sm font-light tracking-wider">CATALOG</button>
        <button className="text-gray-600 hover:text-gray-800 text-sm font-light tracking-wider">ABOUT</button>
        <button className="text-gray-600 hover:text-gray-800 text-sm font-light tracking-wider">CONTACT</button>
      </div>

      {/* Center Logo */}
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <h1 className="text-2xl font-light tracking-[0.3em] text-gray-800">
          LANCÔME
          <div className="text-xs tracking-[0.2em] text-center mt-1">PARIS</div>
        </h1>
      </div>

      {/* Right Navigation */}
      <div className="flex items-center space-x-8">
        <button className="text-gray-600 hover:text-gray-800 text-sm font-light tracking-wider">GIFTS</button>
        <button className="text-gray-600 hover:text-gray-800 text-sm font-light tracking-wider">LOG IN</button>
        <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-800">
          <span className="text-sm font-light tracking-wider">CART</span>
          <div className="relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-2 bg-gray-800 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </div>
        </button>
      </div>
    </nav>
  )
}

export default Navigation

