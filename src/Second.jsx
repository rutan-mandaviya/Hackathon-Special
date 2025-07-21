import React, { useState } from 'react'
import { MdArrowOutward } from "react-icons/md"
import { motion, AnimatePresence } from 'framer-motion'

const perfumes = [
  {
    id: '01',
    name: 'JASMIN',
    description: 'A radiant floral heart with fresh, luminous Jasmine blossoms...',
    image: '/jasmine.webp'
  },
  {
    id: '02',
    name: 'ROSE',
    description: 'The Damask Rose—velvety, bold, and unmistakably luxurious...',
    image: '/roses.webp'
  },
  {
    id: '03',
    name: 'CHYPRE',
    description: 'A classic woody-mossy base reimagined with elegance...',
    image: '/chypre.webp'
  }
]

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
      duration: 0.6
    }
  },
  exit: { opacity: 0, y: 50, transition: { duration: 0.4 } }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

const imageVariants = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
}

const Second = () => {
  const [hovered, setHovered] = useState(null)
// bg-gradient-to-br from-pink-50 via-[#fbe5e1] to-[#f3d7e5] 
  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="perfume-section"
        className="min-h-screen py-12 md:py-0  flex items-center justify-center px-4"
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <div className="text-center w-full max-w-5xl">
          {/* Responsive Heading */}
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold text-[#b1aeb4] mb-8 sm:mb-10 md:mb-12"
            variants={itemVariants}
          >
            CLEAN & GLOW ACCORD
          </motion.h1>

          <motion.div className="space-y-4 sm:space-y-6 relative">
            {perfumes.map(({ id, name, description, image }) => (
              <motion.div
                key={id}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6 border-t border-gray-300 pt-4 sm:pt-6 px-2 cursor-pointer relative"
                variants={itemVariants}
              >
                <h1 className="text-base sm:text-lg font-bold text-gray-700">{id}</h1>
                <h1 className="text-2xl sm:text-3xl md:text-4xl text-[#c1898d] font-semibold">{name}</h1>
                <p className="text-sm sm:text-base text-gray-700 max-w-md sm:max-w-xl text-center md:text-left">
                  {description}
                </p>
                <h1 className="text-lg sm:text-xl text-[#b17b86]">
                  <MdArrowOutward />
                </h1>

                {/* Fancy Hover Image */}
                <AnimatePresence>
                  {hovered === id && (
                    <motion.div
                      className="absolute -top-10 right-0 md:right-0 mt-2 w-40 h-40 rounded-full overflow-hidden  border border-pink-300  z-50"
                      style={{ boxShadow: '0 8px 16px rgba(197, 130, 148, 0.6)' }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={imageVariants}
                    >
                      <img
                        src={image}
                        alt={`${name} perfume`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </AnimatePresence>
  )
}

export default Second
