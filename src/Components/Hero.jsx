import React from 'react';
import TextPressure from './TextPressure';

const Hero = () => {
  return (
    <>
      {/* Hero Section - Modified for mobile but maintains laptop layout */}
      <section className="relative w-full h-full my-6 md:my-14 flex items-center justify-center px-4 md:px-8">
        <TextPressure />
        <div className="absolute">
          <img 
            className='h-[25vh] md:h-[70vh] max-w-full rotate-[325deg] mix-blend-multiply object-contain' 
            src="/perfume.webp" 
            alt="Lancôme Perfume" 
          />
        </div>
      </section>

      {/* Product Options Section - Responsive modifications */}
      <section className='px-4 md:px-[10%] flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 font-[Gilroy]'>
        {/* Size Options */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-7">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#e0e8ff] to-[#d7d2f0] text-[#493eaeea] font-medium hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[10px] xs:text-xs sm:text-sm lg:text-sm text-center leading-tight">Idôle Eau de Parfum</h1>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#ffe6ec] to-[#ffcfdc] text-[#b81340] font-medium hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[10px] xs:text-xs sm:text-sm lg:text-sm text-center leading-tight">5.7 FLOZ <br />50 ML</h1>
          </div>

          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#fff0e0] to-[#ffe2cc] text-[#b95d19] font-bold hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[10px] xs:text-xs sm:text-sm lg:text-sm text-center leading-tight">2.5 FLOZ <br />75 ML</h1>
          </div>
        </div>

        {/* Price & Add to Cart */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center mt-4 md:mt-0">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 text-neutral-500 font-bold flex items-center justify-center border border-zinc-300">
            <h1 className='text-sm xs:text-base sm:text-lg lg:text-xl text-center'>$ 69.00</h1>
          </div>
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-[#5f4a52] text-white hover:bg-[#543737] hover:border-2 hover:scale-110 transition duration-300 font-semibold flex items-center justify-center shadow-sm">
            <h1 className='text-sm xs:text-base sm:text-lg lg:text-xl text-center'>Add to Cart</h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;