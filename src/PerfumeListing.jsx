import React, { useState } from "react";
import { Link } from "react-router-dom"; // React Router v6+

const products = [
  {
    id: 1,
    name: "Idôle Eau de Parfum",
    image: "/p7.jpg",
    hoverImage: "/p2.webp",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 2,
    name: "Idôle Eau de Parfum",
    image: "/p9.jpg",
     hoverImage:"/p9h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 3,
    name: "Idôle Eau de Parfum",
    image: "/p5.jpg",
     hoverImage:"/p5h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 4,
    name: "Idôle Eau de Parfum",
    image: "/p4.webp",
     hoverImage:"/p4h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 5,
    name: "Idôle Eau de Parfum",
    image: "/p1.png",
    hoverImage:"/p1h.png",
    
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 6,
    name: "Idôle Eau de Parfum",
    image: "/p6.png",
     hoverImage:"/p6h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 7,
    name: "Idôle Eau de Parfum",
    image: "/p8.webp",
     hoverImage:"/p8h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },

  {
    id: 8,
    name: "Idôle Eau de Parfum",
    image: "/p10.png",
     hoverImage:"/p10h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },
  {
    id: 9,
    name: "Idôle Eau de Parfum",
    image: "/p11.png",
     hoverImage:"/p11h.png",
    price: 69,
    sizes: [
      { value: "50ml", label: "1.7 FL.OZ (50 ML)" },
      { value: "75ml", label: "2.5 FL.OZ (75 ML)" },
    ],
  },

  // Add more products as needed
];

export default function PerfumeListing() {
  const [hovered, setHovered] = useState(null);
  return (
    <div className="w-full px-4 md:px-20 py-4 mb-20">
      <h1 className="text-center text-3xl md:text-5xl mb-3 font-bold text-indigo-900">
        Our Fragrance Collection
      </h1>
      <p className="text-center mb-8 text-base xs:text-lg md:text-xl font-light italic text-indigo-700">
        Discover your signature scent with our exclusive perfume range
      </p>
      <div className="flex flex-wrap gap-8 md:gap-20 md:px-10 justify-center md:justify-start">
        {products.map((p) => (
          <Link
            to={`/product-detail/${p.id}`}
            key={p.id}
            className="hover:shadow rounded-2xl p-4 w-64 flex flex-col items-center transition duration-200 group text-inherit no-underline"
            onMouseEnter={() => setHovered(p.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <img
              src={hovered === p.id ? p.hoverImage : p.image}
              alt={p.name}
              className="w-full h-56 object-contain mb-4 mix-blend-multiply rounded-xl transition-all duration-300 ease-in-out"
            />
            <div className="text-center w-full">
              <h2 className="text-lg font-semibold tracking-wide text-indigo-900 mb-2 truncate">
                {p.name}
              </h2>
              <div className="flex justify-center items-center gap-3 mb-4">
                <select className="bg-white/60 px-3 py-1 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-200">
                  {p.sizes.map((s, idx) => (
                    <option key={idx} value={s.value}>
                      {s.label}
                    </option>
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
