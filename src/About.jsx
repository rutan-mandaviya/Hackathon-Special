import React, { useEffect, useRef } from 'react'
import MarqueeLancome from './Components/MarqueeLancome'

const About = () => {
  const topImg = useRef(null)
  const bottomImg = useRef(null)
  const bgBlob1 = useRef(null)
  const bgBlob2 = useRef(null)
  const dot1 = useRef(null)
  const dot2 = useRef(null)
  const dot3 = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset

      // Floating image transforms
      if (topImg.current) {
        topImg.current.style.transform = `translateY(${scrollY * 0.07}px) scale(1.05)`
      }
      if (bottomImg.current) {
        bottomImg.current.style.transform = `translateY(${scrollY * -0.03}px) scale(1.03)`
      }

      // Background blobs slight parallax
      if (bgBlob1.current) {
        bgBlob1.current.style.transform = `translateY(${scrollY * 0.03}px) scale(1.05)`
      }
      if (bgBlob2.current) {
        bgBlob2.current.style.transform = `translateY(${scrollY * -0.02}px) scale(1.04)`
      }

      // Dot breathing effect
      if (dot1.current) dot1.current.style.transform = `translateY(${Math.sin(scrollY * 0.03) * 8}px)`
      if (dot2.current) dot2.current.style.transform = `translateY(${Math.sin(scrollY * 0.04) * 12}px)`
      if (dot3.current) dot3.current.style.transform = `translateY(${Math.sin(scrollY * 0.025) * 10}px)`
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="md:h-[80vh] relative mt-4 overflow-hidden">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 opacity-10">
          <div
            ref={bgBlob1}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-gray-300 to-stone-400 rounded-full blur-3xl"
          ></div>
          <div
            ref={bgBlob2}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-neutral-300 to-gray-300 rounded-full blur-3xl"
          ></div>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 min-h-screen flex flex-col lg:grid lg:grid-cols-12 lg:gap-6 p-4 lg:p-6">
          {/* Text Column */}
          <div className="lg:col-span-5 flex flex-col px-2 md:px-10 space-y-6 order-2 lg:order-1 mt-6 lg:mt-0">
            <div className="space-y-4">
              <span className="text-sm font-medium bg-blue-50 text-blue-600 px-4 py-2 rounded-full tracking-wider uppercase inline-block">
                French Heritage
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 leading-tight">
                About
                <span className="block font-semibold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                  Lancôme
                </span>
              </h1>
              <div className="w-16 h-1 bg-gray-200 rounded-full"></div>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-lg md:text-xl font-light">
                At <strong className="text-gray-800">Lancôme</strong>, fragrance transcends the ordinary — it becomes a{' '}
                <em className="text-gray-500">symphony of emotion, elegance, and empowerment</em>.
              </p>
              <p className="text-base md:text-lg">
                We masterfully blend timeless French luxury with contemporary sophistication, creating{' '}
                <span className="font-semibold text-gray-800">unforgettable experiences</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-blue-100 rounded-full"></div>
                  <span>Since 1935</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-pink-100 rounded-full"></div>
                  <span>Parisian Elegance</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500">
                  <div className="w-2 h-2 bg-violet-100 rounded-full"></div>
                  <span>Luxury Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Media Column (Video + Floating Images) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-80 lg:h-[70vh] min-h-[400px]">
            {/* Video Area */}
            <div className="absolute inset-2 lg:inset-4 z-20">
              <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-[0_6px_32px_0_rgba(44,62,80,0.21)] border-2 border-zinc-200 bg-white/20">
                <video
                  src="/vid.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/20 to-black/20"></div>
              </div>
            </div>

            {/* Floating Images */}
            <div
              ref={topImg}
              className="absolute top-5 right-5 w-20 h-28 md:w-28 md:h-36 lg:w-36 lg:h-44 z-30"
            >
              <img
                src="/ads.webp"
                alt="Lancôme fragrance collection"
                loading="lazy"
                className="w-full  h-full object-cover rounded-xl hover:scale-125 shadow-lg border-2 border-white transform rotate-0 hover:-rotate-4 transition-transform duration-300"
              />
            </div>

            <div
              ref={bottomImg}
              className="absolute bottom-5 left-5 w-20 h-28 md:w-28 md:h-36 lg:w-36 lg:h-44 z-30"
            >
              <img
                src="/ads2.jpg"
                alt="Lancôme premium bottles"
                loading="lazy"
                className="w-full h-full hidden md:block object-cover rounded-xl hover:scale-125 shadow-lg border-2 border-white transform rotate-0 hover:rotate-2 transition-transform duration-300"
              />
            </div>

            {/* Floating Decorative Dots */}
            <div
              ref={dot1}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-gray-400 rounded-full opacity-40 animate-pulse"
            ></div>
            <div
              ref={dot2}
              className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-stone-400 rounded-full opacity-30 animate-pulse delay-1000"
            ></div>
            <div
              ref={dot3}
              className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-neutral-400 rounded-full opacity-20 animate-pulse delay-2000"
            ></div>
          </div>
        </div>
      </div>

      {/* Footer Marquee */}
      <MarqueeLancome />
    </>
  )
}

export default About
