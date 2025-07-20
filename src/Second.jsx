import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Second = () => {
  return (
    <section className="min-h-screen py-12 md:py-0 bg-gradient-to-br from-pink-50 via-[#fbe5e1] to-[#f3d7e5] flex items-center justify-center px-4">
      <div className="text-center w-full max-w-5xl">
        {/* Heading - Responsive font size */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-[#b1aeb4] mb-8 sm:mb-10 md:mb-12">
          CLEAN & GLOW ACCORD
        </h1>

        <div className="space-y-4 sm:space-y-6">
          {/* JASMIN */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-gray-300 pt-4 sm:pt-6 px-2">
            <h1 className="text-base sm:text-lg font-bold text-gray-700">01</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#c1898d] font-semibold">JASMIN</h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl text-center md:text-left">
              A radiant floral heart with fresh, luminous Jasmine blossoms—
              elegant and sensual, leaving a lingering trail of sophistication.
            </p>
            <h1 className="text-lg sm:text-xl text-[#b17b86]">
              <MdArrowOutward />
            </h1>
          </div>

          {/* ROSE */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-gray-300 pt-4 sm:pt-6 px-2">
            <h1 className="text-base sm:text-lg font-bold text-gray-700">02</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#c1898d] font-semibold">ROSE</h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl text-center md:text-left">
              The iconic Damask Rose—velvety, bold, and unmistakably luxurious—
              brings timeless femininity to every note.
            </p>
            <h1 className="text-lg sm:text-xl text-[#b17b86]">
              <MdArrowOutward />
            </h1>
          </div>

          {/* CHYPRE */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-gray-300 pt-4 sm:pt-6 px-2">
            <h1 className="text-base sm:text-lg font-bold text-gray-700">03</h1>
            <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#c1898d] font-semibold">CHYPRE</h1>
            <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl text-center md:text-left">
              A classic woody-mossy base reimagined with elegance—intense and warm,
              it anchors the fragrance with mystery and depth.
            </p>
            <h1 className="text-lg sm:text-xl text-[#b17b86]">
              <MdArrowOutward />
            </h1>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Second