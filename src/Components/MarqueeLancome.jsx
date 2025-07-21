import React from "react";

const marqueeContent = [
  "Nykaa",
  "Amazon",
  "Tata CLiQ",
  "Myntra",
  "Sephora",
  "Flipkart",
  "Nykaa",
  "Amazon"
];

const MarqueeLancome = () => (
  <div className="w-full overflow-hidden bg-gradient-to-r from-pink-50 via-blue-50 to-pink-50 py-3  mt-10 border-y border-blue-100 shadow-sm">
    <style>
      {`
        @keyframes minimal-marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-minimal-marquee {
          display: flex;
          animation: minimal-marquee 22s linear infinite;
        }
      `}
    </style>
    <div className="relative flex items-center w-full h-10">
      <div className="animate-minimal-marquee whitespace-nowrap">
        {[...marqueeContent, ...marqueeContent].map((item, idx) => (
          <span
            key={idx}
            className="font-serif text-base md:text-lg text-[#b8917f] mx-6 tracking-wide"
          >
            {item}
            <span className="mx-10 text-gray-300 text-lg align-middle select-none">•</span>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default MarqueeLancome;
