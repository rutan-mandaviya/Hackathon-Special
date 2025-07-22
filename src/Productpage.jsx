import React, { useContext } from 'react';
import CircularGallery from './Components/CircularGallery';
import { ProductContext } from './utils/Context';
import MarqueeLancome from './Components/MarqueeLancome';
import MarqueePerfume from './Components/MarqueePerfume';

const Productpage = () => {
  const [products, setproducts] = useContext(ProductContext);

  return (
    <div className="min:h-0 md:min-h-screen  flex flex-col justify-between gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold  text-[#b1aeb4] leading-tight">
          MEET THE WORLD'S THINNEST <br className="hidden sm:block" /> FRAGRANCE BOTTLE
        </h1>
      </div>

      {/* Marquee Perfume Carousel */}
      <div className="mt-8 mb-20 md:mt-12">
        <MarqueePerfume />
      </div>
    </div>
  );
};

export default Productpage;
