import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './utils/Context';

// Utility function for interpolation
const lerp = (a, b, n) => a + (b - a) * n;

export default function PerfumeListing() {
  const [hovered, setHovered] = useState(null);
  const cardRefs = useRef([]);
  const [cardStyles, setCardStyles] = useState([]);
  const [products, setproducts] = useContext(ProductContext);

  useEffect(() => {
    if (!products || products.length === 0) return;

    // Ensure cardRefs doesn't retain old refs
    cardRefs.current = cardRefs.current.slice(0, products.length);

    const onScroll = () => {
      const newStyles = products.map((_, idx) => {
        const card = cardRefs.current[idx];
        if (!card) return {};
        const rect = card.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const centerY = windowHeight / 2;
        const cardMid = rect.top + rect.height / 2;
        const distance = Math.abs(cardMid - centerY);
        const maxDistance = windowHeight * 0.6;

        let opacity = 1 - distance / maxDistance;
        opacity = Math.min(1, Math.max(0.4, opacity));
        const scale = lerp(0.92, 1.04, opacity);
        const translateZ = lerp(-50, 20, opacity);

        const cardCenterX = rect.left + rect.width / 2;
        const windowCenterX = window.innerWidth / 2;
        const tiltX = (cardCenterX - windowCenterX) / window.innerWidth * 10;
        const perspective = 1000;

        return {
          opacity,
          transform: `perspective(${perspective}px) scale3d(${scale}, ${scale}, 1) translateZ(${translateZ}px) rotateY(${tiltX}deg)`,
          transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
        };
      });
      setCardStyles(newStyles);
    };

    const handleScroll = () => requestAnimationFrame(onScroll);

    window.addEventListener('scroll', handleScroll, { passive: true });
    const timeout = setTimeout(onScroll, 100);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [products]);

  return (
    <div className="w-full px-4 md:px-20 py-4 mb-20">
     <h1 className="text-center text-3xl md:text-5xl mb-3 font-[400] tracking-wider text-gray-800 uppercase" style={{ fontFamily: "'Goudy Old Style', 'Times New Roman', serif" }}>
  Our Fragrance Collection
</h1>
<p className="text-center mb-8 text-sm xs:text-base md:text-lg font-light text-gray-500 tracking-widest" style={{ fontFamily: "'Futura', 'Avenir', sans-serif" }}>
  DISCOVER YOUR SIGNATURE SCENT
</p>
      <div className="
        grid grid-cols-2 
        md:grid-cols-3 lg:grid-cols-4
        gap-4 
        md:gap-8 lg:gap-10
        px-2 md:px-10 justify-center
      ">
        {products.map((p, idx) => (
          <Link
            to={`/perfumes/${p.id}`}
            key={p.id}
            ref={el => (cardRefs.current[idx] = el)}
            style={cardStyles[idx] || {}}
            className="
              bg-white/50 backdrop-blur-md hover:shadow-lg rounded-2xl
              p-2 md:p-4 w-full max-w-xs flex flex-col items-center
              transition duration-300 group text-inherit no-underline will-change-transform
            "
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative w-full h-32 xs:h-40 md:h-56 mb-4">
              <img
                src={p.images[0]}
                alt={p.name}
                loading="lazy"
                className={`
                  w-full h-full object-contain absolute inset-0
                  rounded-xl transition-opacity duration-500 ease-in-out
                  ${hovered === p.id ? 'opacity-0' : 'opacity-100'}
                `}
                draggable={false}
              />
              <img
                src={p.images[1]}
                alt={p.name}
                loading="lazy"
                className={`
                  w-full h-full object-contain absolute inset-0
                  rounded-xl transition-opacity duration-900 ease-in-out
                  ${hovered === p.id ? 'opacity-100' : 'opacity-0'}
                `}
                draggable={false}
              />
            </div>
            <div className="text-center w-full">
              <h2 className="text-base sm:text-lg font-semibold tracking-wide text-gray-800 mb-2 truncate">
                {p.name}
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center gap-3 mb-4">
                <select className="bg-white/70 px-3 py-1 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                  {p.sizes.map((s, i) => (
                    <option key={i} value={s.value}>{s.label}</option>
                  ))}
                </select>
                <span className="text-pink-600 font-medium text-base">
                  ${p.price.toFixed(2)}
                </span>
              </div>
              <button className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full font-semibold shadow w-full transition-all">
                Add to Cart
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}