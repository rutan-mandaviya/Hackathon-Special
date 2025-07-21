import React from "react";

const marqueeContent = [
    "Nykaa ",
  "Amazon",
  "Tata CLiQ",
  "Myntra",
  "Sephora",
  "Flipkart",
    "Nykaa ",
  "Amazon",
 
];

const MarqueeLancome = () => (
  <div className="w-full overflow-hidden  border-y-2 border-blue-50 py-2 md:py-3">
    <style>
      {`
        @keyframes marquee-inline {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee-inline {
          animation: marquee-inline 15s linear infinite ;
        }
      `}
    </style>
    <div className="relative flex justify-between items-center w-full">
      <div className="flex whitespace-nowrap animate-marquee-inline">
        {marqueeContent.map((item, idx) => (
          <span
            className="font-serif text-sm md:text-xl text-[#a77b6d] mx-3 md:mx-18 tracking-wide"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex whitespace-nowrap animate-marquee-inline  ">
        {marqueeContent.map((item, idx) => (
          <span
            className="font-serif text-sm md:text-xl text-[#a77b6d] px-3 md:px-18 tracking-wide"
            key={idx}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default MarqueeLancome;
