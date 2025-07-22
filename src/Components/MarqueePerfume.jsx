import React, { useContext } from "react";
import { ProductContext } from "../utils/Context";
import { Link } from "react-router-dom";

const MarqueePerfume = () => {
  const [products] = useContext(ProductContext);

  if (!products || products.length === 0 || !products[0]?.images) {
    return null;
  }

  // Double the array for seamless marquee
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
            perspective: 1000px;
            width: 280px;
            height: 380px;
            margin: 0 32px;
            flex-shrink: 0;
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

          .marquee-item-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
          }

          .marquee-item:hover .marquee-item-inner {
            transform: rotateY(180deg);
          }

          .marquee-item-front,
          .marquee-item-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 16px;
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 24px;
            box-sizing: border-box;
          }

          .marquee-item-front {
            background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 50%, #e3eeff 100%);
            transform: rotateY(0deg);
            z-index: 2;
          }

          .marquee-item-back {
            background: linear-gradient(135deg, #f3e7e9 0%, #e3eeff 50%, #e3eeff 100%);
            transform: rotateY(180deg);
          }

          .muted-product-name {
            color: #b8917f;
            font-family: serif;
            margin-top: 16px;
            font-size: 1.25rem;
            text-align: center;
            letter-spacing: 1px;
          }

          @media (max-width: 480px) {
            .muted-product-name {
              font-size: 1rem;
            }
          }

          .go-to-button {
            position: absolute;
            bottom: 24px;
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.3s ease 0.2s;
            background: #b8917f;
            color: white;
            padding: 8px 24px;
            border-radius: 24px;
            font-weight: 500;
            text-decoration: none;
          }

          .marquee-item:hover .go-to-button {
            opacity: 1;
            transform: translateY(0);
          }

        `}
      </style>

      <div className="relative flex items-center w-full h-full">
        <div className="animate-minimal-marquee whitespace-nowrap">
          {doubleProducts.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="marquee-item">
              <div className="marquee-item-inner">
                <div className="marquee-item-front bg-amber-500">
                  <img
                    className="w-full h-[60%] object-contain mix-blend-multiply"
                    src={item.images[0]}
                    alt={item.name}
                    loading="lazy"
                  />
                  <h2 className="muted-product-name">{item.name}</h2>
                </div>
                <div className="marquee-item-back">
                  <p className="text-center text-gray-700 font-semibold font-[Gilroy]">
                    Experience the essence <br /> of luxury with {item.name}.
                  </p>
                  <Link
                    to={`/perfumes/${item.id}`}
                    className="go-to-button"
                    aria-label={`View ${item.name} details`}
                  >
                    Go to Product
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MarqueePerfume;
