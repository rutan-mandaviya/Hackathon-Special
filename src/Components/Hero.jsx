import React, { useRef, useEffect } from 'react';
import TextPressure from './TextPressure';

const Hero = () => {
  // Ref for the perfume image
  const bottleRef = useRef(null);

  useEffect(() => {
    let direction = 1;
    let y = 0;
    let frame;
    const animate = () => {
      y += direction * 0.5;
      if (y > 10) direction = -1;
      if (y < 0) direction = 1;
      if (bottleRef.current) {
        bottleRef.current.style.transform = `translateY(-${y}px) rotate(325deg)`;
      }
      frame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative  min:h-0 w-full md:min-h-[40vh] md:h-full my-14 md:my-14 flex items-center justify-center px-4 md:px-8">
        <TextPressure />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            ref={bottleRef}
            className="h-[20vh] xs:h-[25vh] md:h-[70vh] max-w-full mix-blend-multiply object-contain"
            src="/perfume.webp"
            alt="Lancôme Perfume"
            style={{ transition: 'transform 0.1s linear' }}
          />
        </div>
      </section>
      {/* Product Options Section */}
      <section  className="hidden px-4 md:px-[10%]  md:flex flex-col lg:flex-row items-center justify-between gap-4 md:gap-6 font-['Gilroy', 'Arial', 'sans-serif']">
        <div className="flex flex-wrap justify-center gap-3 md:gap-4 lg:gap-7">
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#e0e8ff] to-[#d7d2f0] text-[#493eaeea] font-medium hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[9px] xs:text-[10px] sm:text-sm lg:text-sm text-center leading-tight">
              Idôle Eau de Parfum
            </h1>
          </div>
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#ffe6ec] to-[#ffcfdc] text-[#b81340] font-medium hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[9px] xs:text-[10px] sm:text-sm lg:text-sm text-center leading-tight">
              1.7 FLOZ <br />50 ML
            </h1>
          </div>
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-gradient-to-br from-[#fff0e0] to-[#ffe2cc] text-[#b95d19] font-bold hover:scale-110 duration-300 flex items-center justify-center">
            <h1 className="text-[9px] xs:text-[10px] sm:text-sm lg:text-sm text-center leading-tight">
              2.5 FLOZ <br />75 ML
            </h1>
          </div>
        </div>
        {/* Price & Add to Cart */}
        <div className="flex gap-2 sm:gap-3 md:gap-4 lg:gap-5 justify-center mt-4 md:mt-0">
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 text-neutral-500 font-bold flex items-center justify-center border border-zinc-300">
            <h1 className="text-xs xs:text-sm sm:text-lg lg:text-xl text-center">
              $ 69.00
            </h1>
          </div>
          <div className="w-14 h-14 xs:w-16 xs:h-16 sm:w-20 sm:h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full text-center p-2 sm:p-3 lg:p-4 bg-[#5f4a52] text-white hover:bg-[#543737] hover:border-2 hover:scale-110 transition duration-300 font-semibold flex items-center justify-center shadow-sm">
            <h1 className="text-xs xs:text-sm sm:text-lg lg:text-xl text-center">
              Add to Cart
            </h1>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;