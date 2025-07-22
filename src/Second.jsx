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

  return (
    <AnimatePresence mode="wait">
      <motion.section
        key="perfume-section"
        className="min-h-screen  mb-20 py-12 md:py-0 flex items-center justify-center px-4 "
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariants}
      >
        <div className="text-center w-full max-w-5xl">
          {/* Luxury Heading */}
          <motion.div variants={itemVariants} className="mb-12 md:mb-16">
            <motion.p 
              className="text-xs tracking-[0.3em] text-[#b39cd0] mb-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              SIGNATURE ACCORDS
            </motion.p>
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-[#8a7a9e] tracking-wider uppercase"
              style={{ fontFamily: "'Didot', 'Bodoni MT', serif" }}
            >
              Clean & Glow
            </motion.h1>
            <motion.div 
              className="w-16 h-px bg-[#d4af37] mx-auto mt-4"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <motion.div className=" sm:space-y-10  relative">
            {perfumes.map(({ id, name, description, image }) => (
              <motion.div
                key={id}
                onMouseEnter={() => setHovered(id)}
                onMouseLeave={() => setHovered(null)}
                className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#e8e0ee] pt-8 px-4 cursor-pointer group relative"
                variants={itemVariants}
                whileHover={{ 

                  transition: { duration: 0.3 }
                }}
              >
                <motion.span 
                  className="text-lg font-medium text-[#9e8fb1]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  {id}
                </motion.span>
                
                <motion.h2 
                  className="text-2xl sm:text-3xl md:text-4xl text-[#8a6e82] font-light tracking-wider"
                  style={{ fontFamily: "'Didot', 'Bodoni MT', serif" }}
                >
                  {name}
                </motion.h2>
                
                <motion.p 
                  className="text-sm sm:text-base text-[#7a6a8a] max-w-md sm:max-w-xl text-center md:text-left leading-relaxed"
                  style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 300 }}
                >
                  {description}
                </motion.p>
                
                <motion.div 
                  className="text-xl text-[#b17b86] transform group-hover:translate-x-1 transition-transform"
                  whileHover={{ scale: 1.2 }}
                >
                  <MdArrowOutward />
                </motion.div>

                {/* Luxury Hover Image */}
                <AnimatePresence>
                  {hovered === id && (
                    <motion.div
                      className="absolute -top-20 right-0 md:right-10 w-48 h-48 rounded-full overflow-hidden border-2 border-[#f0e6ff] z-50"
                      style={{ 
                        boxShadow: '0 15px 30px rgba(168, 139, 191, 0.3)',
                        background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(245,240,255,0.8) 100%)'
                      }}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      variants={imageVariants}
                    >
                      <img
                        src={image}
                        alt={`${name} perfume`}
                        className="w-full h-full object-cover mix-blend-multiply"
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