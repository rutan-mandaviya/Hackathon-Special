import React, { useContext, useState } from 'react';
import { ProductContext } from '../utils/Context';
import { Link } from 'react-router-dom';
import { MdArrowOutward } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

const MarqueePerfume = () => {
  const [products] = useContext(ProductContext);
  const [hovered, setHovered] = useState(null);

  if (!products || products.length === 0 || !products[0]?.images) {
    return null;
  }

  const doubleProducts = [...products, ...products];

  return (
    <div className="w-full h-[90%] overflow-hidden">
      <style>
        {`
          @keyframes minimal-marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .animate-minimal-marquee {
            display: flex;
            animation: minimal-marquee 99s linear infinite;
            will-change: transform;
          }
          .marquee-item {
            width: 280px;
            height: 400px;
            background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 50%, #e3eeff 100%);
            margin: 0 32px;
            flex-shrink: 0;
            position: relative;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 14px;
          }
          @media (max-width: 768px) {
            .marquee-item {
              width: 200px;
              height: 300px;
              margin: 0 16px;
            }
          }
          @media (max-width: 480px) {
            .marquee-item {
              width: 160px;
              height: 240px;
              margin: 0 12px;
            }
          }
        `}
      </style>

      <div className="relative flex items-center w-full h-full">
        <div className="animate-minimal-marquee whitespace-nowrap">
          {doubleProducts.map((item, idx) => (
            <motion.div
              key={`${item.id}-${idx}`}
              className="marquee-item group "
              onMouseEnter={() => setHovered(`${item.id}-${idx}`)}
              onMouseLeave={() => setHovered(null)}
              whileHover={{ scale: 1.025 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {/* Product Image */}
              <motion.img
                src={item.images[0]}
                alt={item.name}
                className="w-full h-[70%] object-contain mix-blend-multiply transition duration-300"
                animate={{ scale: hovered === `${item.id}-${idx}` ? 1.05 : 1 }}
                loading="lazy"
              />

              {/* Product Name Always Visible */}
              <h2 className="mt-3 text-center text-[#c9ade7] font-semibold text-base sm:text-lg leading-tight">
                {item.name}
              </h2>

              {/* Hover Overlay */}
              <AnimatePresence>
                {hovered === `${item.id}-${idx}` && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent flex flex-col justify-end items-start p-5"
                  >
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: 20, opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex items-center gap-2 mb-2"
                    >
                      <MdArrowOutward className="text-white text-2xl" />
                      <span className="text-white text-lg tracking-wide font-bold">
                        DISCOVER
                      </span>
                    </motion.div>
                    <Link
                      to={`/perfumes/${item.id}`}
                      className="mt-1 inline-block px-4 py-2 bg-[#bc8064] text-white rounded-full font-semibold text-sm hover:bg-[#a27661] transition"
                    >
                      Go to Product
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueePerfume;
