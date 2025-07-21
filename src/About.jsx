import React from 'react';
import MarqueeLancome from './Components/MarqueeLancome';

const About = () => {
    //  bg-gradient-to-br from-stone-50 via-neutral-50 to-gray-50 
    // bg-gradient-to-br from-pink-50 via-[#fbe5e1] to-[#f3d7e5]
  return (
    <>
   
    <div className="  md:h-[80vh] relative   overflow-hidden">
      
      {/* Decorative background elements - toned down */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-stone-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-neutral-300 to-gray-300 rounded-full blur-3xl"></div>
      </div>

      {/* Main container with responsive grid */}
      <div className="relative z-10 min-h-screen flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 p-4 lg:p-6">
        
        {/* Hero text section */}
        <div className="lg:col-span-5 flex flex-col  space-y-6 order-2 lg:order-1 mt-6 lg:mt-0">
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-sm font-medium text-blue-400 bg-blue-100 px-4 py-2 rounded-full tracking-wider uppercase">
                French Heritage
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
              About
              <span className="block font-bold bg-gradient-to-r from-gray-700 to-stone-700 bg-clip-text text-transparent">
                Lancôme
              </span>
            </h1>
            
            <div className="w-16 h-1 bg-gradient-to-r from-gray-600 to-stone-600 rounded-full"></div>
          </div>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg md:text-xl font-light">
              At <strong className="text-gray-800">Lancôme</strong>, fragrance transcends the ordinary — 
              it becomes a <em className="text-stone-600">symphony of emotion, elegance, and empowerment</em>.
            </p>
            
            <p className="text-base md:text-lg">
              We masterfully blend timeless French luxury with contemporary sophistication, 
              crafting perfumes that resonate with your deepest essence. Our mission extends 
              beyond creating fragrances — we curate <span className="font-medium text-gray-800">unforgettable experiences</span> 
              that leave an indelible mark on your soul.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <span>Since 1935</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-stone-400 rounded-full"></div>
                <span>Parisian Elegance</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <div className="w-2 h-2 bg-neutral-400 rounded-full"></div>
                <span>Luxury Craftsmanship</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual elements section - wider video, shorter height */}
        <div className="lg:col-span-7 relative order-1 lg:order-2 h-80 lg:h-[70vh] min-h-[400px]">
          
          {/* Central video - wider and less inset */}
          <div className="absolute inset-2 lg:inset-4 z-20">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl border-2 border-zinc-200">
              <video
                src="/vid.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Top accent image */}
          <div className="absolute top-5 right-5 w-20 h-28 md:w-28 md:h-36 lg:w-36 lg:h-44 z-30">
            <img
              src="/ads.webp"
              alt="Lancôme fragrance collection"
              className="w-full h-full object-cover rounded-xl hover:scale-125 shadow-lg border-2 border-white transform rotate-0 hover:-rotate-4 transition-transform duration-300"
            />
          </div>

          {/* Bottom accent image */}
          <div className="absolute bottom-5 left-5 w-20 h-28 md:w-28 md:h-36 lg:w-36 lg:h-44 z-30">
            <img
              src="/ads2.jpg"
              alt="Lancôme premium bottles"
              className="w-full h-full object-cover rounded-xl hover:scale-125 shadow-lg border-2 border-white transform -rotate-0 hover:rotate-2 transition-transform duration-300"
            />
          </div>

          {/* Subtle floating elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-pulse"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-stone-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
          <div className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-neutral-400 rounded-full opacity-20 animate-pulse delay-2000"></div>
        </div>
      </div>

      {/* Premium bottom accent - subtle */}
    </div>
<MarqueeLancome></MarqueeLancome>

 </>
  );
};

export default About;
