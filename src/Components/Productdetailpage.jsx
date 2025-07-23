import React, { useContext, useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import IconicIngredientsSection from "./IconicIngredientsSection";
import { AiOutlineArrowLeft } from "react-icons/ai";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { ProductContext } from "../utils/Context";

export default function ProductDetailPage() {
  const [products] = useContext(ProductContext);
  const { id } = useParams();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // If products are still loading
  if (!products || products.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center font-['Montserrat']">
        <h1 className="text-gray-400 text-xl">Loading...</h1>
      </div>
    );
  }

  const product = products.find((p) => Number(p.id) === Number(id));

  // Product not found
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-gray-600 bg-white font-['Montserrat']">
        <h1 className="text-2xl mb-4 font-medium">Product Not Found</h1>
        <Link to="/" className="text-pink-600 underline text-sm hover:text-pink-700 transition-colors">
          Go back home
        </Link>
      </div>
    );
  }

  const carouselImages = product.images || ["/dummy.jpg"];
  const sizes = product.sizes || [{ label: "Standard", value: "standard" }];
  const description = product.description || "No description available.";

  return (
    <div className="w-full min-h-screen bg-[url('/background.webp')] bg-cover bg-fixed bg-center overflow-auto font-['Montserrat']">
      {/* Back Button (Top Left) */}
      <button
        onClick={() => navigate("/perfumes")}
        className="fixed top-4 left-4 z-50 bg-white shadow-md border border-gray-200 hover:bg-pink-100 transition text-sm font-medium text-gray-700 px-4 py-2 rounded-full flex items-center gap-2"
      >
        <AiOutlineArrowLeft className="text-lg" />
        Back
      </button>

      {/* Product Details Container */}
      <div className="flex flex-col md:flex-row max-w-8xl w-full mx-auto px-4 md:px-6 py-10 rounded-3xl border-zinc-100 overflow-hidden">
        {/* Images & Carousel Section */}
        <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-5 items-center p-2 md:p-5">
          {/* Thumbnails */}
          <div className="hidden md:block mb-3">
            <Swiper
              onSwiper={setThumbsSwiper}
              direction="vertical"
              slidesPerView={carouselImages.length < 3 ? carouselImages.length : 3}
              spaceBetween={12}
              modules={[Thumbs]}
              style={{ height: "300px" }}
              className="rounded"
            >
              {carouselImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="w-24 h-24 object-cover border rounded-md cursor-pointer mix-blend-multiply"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Main Carousel */}
          <div className="flex-1 w-full flex justify-center">
            <Swiper
              modules={[Navigation, Thumbs]}
              navigation
              thumbs={{ swiper: thumbsSwiper }}
              className="rounded-lg"
              style={{ maxWidth: "650px", height: "450px" }}
            >
              {carouselImages.map((img, idx) => (
                <SwiperSlide key={idx}>
                  <img
                    src={img}
                    alt=""
                    className="w-2/3 mx-auto md:w-full h-full object-contain mix-blend-multiply"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-[40%] p-4 md:p-10 flex flex-col justify-center">
          <span className="uppercase text-xs font-medium tracking-widest text-gray-500 mb-1">
            {product.brand || "FRAGRANCE"}
          </span>
          <h2 className="font-bold text-xl md:text-3xl text-gray-800 mb-3 tracking-tight">
            {product.name}
          </h2>
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3 font-light">
            <span>{product.likes || 0} Likes</span>
          </div>

          <div className="flex items-end gap-3 mb-4">
            <span className="text-2xl font-bold text-gray-800">${product.price.toFixed(2)}</span>
            <span className="text-gray-400 line-through text-sm">
              ${(product.price * 1.1).toFixed(2)}
            </span>
            <span className="text-green-600 font-medium text-sm">Save 10%</span>
          </div>

          {/* Size Selection */}
          <div className="mb-4">
            <div className="text-sm text-gray-700 font-medium mb-1">Available size</div>
            <select className="rounded border px-4 py-2 bg-white text-gray-700 w-full max-w-xs font-medium focus:outline-none focus:ring-1 focus:ring-pink-300">
              {sizes.map((s, idx) => (
                <option value={s.value} key={idx}>{s.label}</option>
              ))}
            </select>
          </div>

          <p className="mb-4 text-gray-700 leading-relaxed font-light">
            {description}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium shadow transition-colors duration-200">
              Add to Cart
            </button>
            <button className="border border-gray-300 hover:bg-gray-50 px-6 py-3 rounded-full font-medium shadow transition-colors duration-200">
              Wishlist
            </button>
          </div>

          <button className="w-full mb-4 px-5 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full py-3 transition-colors duration-200 shadow-md">
            Buy Now
          </button>

          {/* Pin Code Input */}
          <div className="flex flex-col sm:flex-row items-center gap-3 mb-2">
            <input
              className="border px-4 py-2 rounded focus:outline-none focus:border-pink-400 w-full sm:w-auto font-medium"
              placeholder="Pin code"
            />
            <button className="bg-gray-900 hover:bg-gray-800 text-white px-5 py-2 rounded transition-colors duration-200">
              Check
            </button>
          </div>
          <p className="text-xs text-gray-500 font-light">Cash on delivery available</p>

          <Link to="/perfumes" className="text-sm text-pink-600 underline mt-8 block hover:text-pink-700 transition-colors font-medium">
            ← Back to all perfumes
          </Link>
        </div>
      </div>

      {/* Ingredients Section */}
      <IconicIngredientsSection ingredients={product.ingredients ?? []} />
    </div>
  );
}