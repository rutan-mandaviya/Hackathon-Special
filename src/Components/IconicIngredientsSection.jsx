import React from 'react'
import { motion, AnimatePresence } from 'framer-motion';
const IconicIngredientsSection = ({ ingredients }) => {
    if (!ingredients || ingredients.length === 0) return null;

  return (
    <div className="w-full px-4 md:px-8 py-16 md:py-24 ">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-3xl lg:text-4xl font-serif font-medium text-rose-900 uppercase tracking-wider mb-4"
          >
            Iconic Ingredients
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base text-rose-800/80 font-light max-w-2xl mx-auto leading-relaxed"
          >
            Each note in our fragrance tells a story of sustainable luxury, carefully extracted to create an unforgettable olfactory experience.
          </motion.p>
        </div>

        {/* Ingredients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 px-4">
          {ingredients.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center group"
            >
              {/* Ingredient Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 rounded-full overflow-hidden shadow-lg border-4 border-white bg-white">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Ingredient Text */}
              <div className="text-center px-2">
                <h3 className="text-xl md:text-2xl font-serif font-medium text-rose-900 tracking-wide mb-2">
                  {item.title}
                </h3>
                <p className="text-sm md:text-base text-rose-800/80 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="hidden md:flex justify-center mt-16 opacity-20">
          <svg width="120" height="24" viewBox="0 0 120 24" fill="none" className="text-rose-300">
            <path d="M0 12C0 12 20 0 60 12C100 24 120 12 120 12" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default IconicIngredientsSection;