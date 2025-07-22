import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from "react-icons/md";
import { motion, AnimatePresence } from 'framer-motion';

const Latest = () => {
  const [hovered, setHovered] = useState(null);

  const images = [
    { id: 1, src: "/latest1.webp", alt: "Fragrance 1", to: "/perfumes/2" },
    { id: 2, src: "/latest2.webp", alt: "Fragrance 2", to: "/perfumes/1" },
    { id: 3, src: "/latest3.webp", alt: "Fragrance 3", to: "/perfumes/6" },
  ];

  return (
    <div className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-7xl"
      >
        {/* Luxury Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.p 
            className="text-xs tracking-[0.3em] text-[#b8917f] mb-3"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            NEW RELEASES
          </motion.p>
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-[#8a6e5d] tracking-wider uppercase mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Latest Collection
          </motion.h1>
          <motion.div 
            className="w-20 h-px bg-[#d4af37] mx-auto"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {images.map(({ id, src, alt, to }) => (
            <Link
              to={to}
              key={id}
              className="w-full"
              tabIndex={0}
              style={{ outline: "none" }}
            >
              <motion.div
                className="relative w-full rounded-lg overflow-hidden cursor-pointer shadow-lg group"
                onHoverStart={() => setHovered(id)}
                onHoverEnd={() => setHovered(null)}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img
                  src={src}
                  alt={alt}
                  className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover transition-all duration-500"
                  initial={{ scale: 1 }}
                  animate={{ 
                    scale: hovered === id ? 1.05 : 1,
                    filter: hovered === id ? 'brightness(1.03)' : 'brightness(1)'
                  }}
                  loading="lazy"
                />
                
                <AnimatePresence>
                  {hovered === id && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex items-end p-6"
                    >
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center gap-2"
                      >
                        <MdArrowOutward className="text-white text-2xl md:text-3xl" />
                        <span 
                          className="text-white text-lg md:text-xl font-medium tracking-wider"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          DISCOVER
                        </span>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Luxury Footer Text */}
        <motion.p 
          className="mt-16 text-center text-[#8a6e5d] text-lg md:text-xl italic tracking-wide leading-relaxed max-w-3xl mx-auto"
          style={{ fontFamily: "'Cormorant Garamond', serif" }}
        >
          "Unlock the allure of our newest scents. Let your story begin with a single spritz."
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Latest;