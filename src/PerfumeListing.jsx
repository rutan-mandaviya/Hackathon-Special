import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from './utils/Context';

// List of perfumes
// const products = [
//   {
//     id: 1,
//     name: "Idôle Eau de Parfum",
//     image: "/p7.jpg",
//     hoverImage: "/p2.webp",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 2,
//     name: "Idôle Eau de Parfum",
//     image: "/p9.jpg",
//     hoverImage: "/p9h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 3,
//     name: "Idôle Eau de Parfum",
//     image: "/p5.jpg",
//     hoverImage: "/p5h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 4,
//     name: "Idôle Eau de Parfum",
//     image: "/p4.webp",
//     hoverImage: "/p4h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 5,
//     name: "Idôle Eau de Parfum",
//     image: "/p1.png",
//     hoverImage: "/p1h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 6,
//     name: "Idôle Eau de Parfum",
//     image: "/p6.png",
//     hoverImage: "/p6h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 7,
//     name: "Idôle Eau de Parfum",
//     image: "/p8.webp",
//     hoverImage: "/p8h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 8,
//     name: "Idôle Eau de Parfum",
//     image: "/p10.png",
//     hoverImage: "/p10h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
//   {
//     id: 9,
//     name: "Idôle Eau de Parfum",
//     image: "/p11.png",
//     hoverImage: "/p11h.png",
//     price: 69,
//     sizes: [
//       { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
//       { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
//     ],
//   },
// ];

// Utility function for interpolation
const lerp = (a, b, n) => a + (b - a) * n;

export default function PerfumeListing() {
  const [hovered, setHovered] = useState(null);
  const cardRefs = useRef([]);
  const [cardStyles, setCardStyles] = useState([]);
  const [products,setproducts]=useContext(ProductContext)
  // console.log(products.map((p)=>console.log(p.images)
  // ));
  
useEffect(() => {
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

      // Opacity and scale as before
      let opacity = 1 - distance / maxDistance;
      opacity = Math.min(1, Math.max(0.4, opacity));
      const scale = lerp(0.92, 1.04, opacity);

      // New: parallax Z translation (closer = "forward")
      const translateZ = lerp(-50, 20, opacity);

      // New: subtle 3D tilt based on horizontal position
      const cardCenterX = rect.left + rect.width / 2;
      const windowCenterX = window.innerWidth / 2;
      const tiltX = (cardCenterX - windowCenterX) / window.innerWidth * 10; // -10 to 10 degrees
      const perspective = 1000;

      return {
        opacity,
        transform: `perspective(${perspective}px) scale3d(${scale}, ${scale}, 1) translateZ(${translateZ}px) rotateY(${tiltX}deg)`,
        transition: 'transform 0.2s ease-out, opacity 0.2s ease-out'
      };
    });
    setCardStyles(newStyles);
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  return () => window.removeEventListener('scroll', onScroll);
}, []);


  return (
    <div className="w-full px-4 md:px-20 py-4 mb-20">
      <h1 className="text-center text-3xl md:text-5xl mb-3 font-bold text-gray-800">
        Our Fragrance Collection
      </h1>
      <p className="text-center mb-8 text-base xs:text-lg md:text-xl font-light italic text-gray-500">
        Discover your signature scent with our exclusive perfume range
      </p>
      <div className="flex flex-wrap gap-8 md:gap-20 md:px-10 justify-center md:justify-start">
        {products.map((p, idx) => (
          <Link
            to={`/perfumes/${p.id}`}
            key={p.id}
            ref={(el) => (cardRefs.current[idx] = el)}
            style={cardStyles[idx]}
            className="bg-white/50 backdrop-blur-md hover:shadow-lg rounded-2xl p-4 w-64 flex flex-col items-center transition duration-300 group text-inherit no-underline will-change-transform"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={hovered === p.id ? p.images[1]: p.images[0]}
              alt={p.name}
              loading="lazy"
              className="w-full h-56 object-contain mb-4 mix-blend-multiply rounded-xl transition-all duration-300 ease-in-out"
            />
            <div className="text-center w-full">
              <h2 className="text-lg font-semibold tracking-wide text-gray-800 mb-2 truncate">
                {p.name}
              </h2>
              <div className="flex justify-center items-center gap-3 mb-4">
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
