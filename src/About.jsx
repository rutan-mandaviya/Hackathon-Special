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
   
      <div className="min:h-0   relative ">
        {/* Decorative background blobs */}
        <div className="absolute inset-0 opacity-10 ">
          <div
            ref={bgBlob1}
            className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-[#f3e9e1] to-[#e8d9cf] rounded-full blur-3xl"
          ></div>
          <div
            ref={bgBlob2}
            className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-br from-[#f0e6e0] to-[#e5d6cc] rounded-full blur-3xl"
          ></div>
        </div>

        {/* Main content grid */}
        <div className="relative z-10 min-h-screen flex flex-col lg:grid lg:grid-cols-12 lg:gap-8 p-6 lg:p-8 xl:p-12">
          {/* Text Column */}
          <div className="lg:col-span-5 flex flex-col px-2 md:px-6 lg:px-8 space-y-8 order-2 lg:order-1 mt-8 lg:mt-0">
            <div className="space-y-6">
              <span 
                className="text-xs font-medium tracking-[0.3em] text-[#b8917f] uppercase inline-block"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                FRENCH HERITAGE
              </span>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-light text-[#5a4a42] leading-tight"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                About
                <span className="block font-normal italic text-[#8a6e5d]">
                  Lancôme
                </span>
              </h1>
              <div className="w-24 h-0.5 bg-[#d4af37] rounded-full"></div>
            </div>

            <div 
              className="space-y-6 text-[#5a4a42] leading-relaxed"
              style={{ fontFamily: "'Cormorant Garamond', serif" }}
            >
              <p className="text-lg md:text-xl font-light">
                At <strong className="font-medium">Lancôme</strong>, fragrance transcends the ordinary — it becomes a{' '}
                <em className="italic">symphony of emotion, elegance, and empowerment</em>.
              </p>
              <p className="text-base md:text-lg">
                We masterfully blend timeless French luxury with contemporary sophistication, creating{' '}
                <span className="font-medium">unforgettable experiences</span>.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center space-x-2 text-sm text-[#b8917f]">
                  <div 
                    className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse"
                    style={{ boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}
                  ></div>
                  <span>Since 1935</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#b8917f]">
                  <div 
                    className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse delay-300"
                    style={{ boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}
                  ></div>
                  <span>Parisian Elegance</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-[#b8917f]">
                  <div 
                    className="w-2 h-2 bg-[#d4af37] rounded-full animate-pulse delay-700"
                    style={{ boxShadow: '0 0 8px rgba(212, 175, 55, 0.5)' }}
                  ></div>
                  <span>Luxury Craftsmanship</span>
                </div>
              </div>
            </div>
          </div>

          {/* Media Column (Video + Floating Images) */}
          <div className="lg:col-span-7 relative order-1 lg:order-2 h-80 sm:h-[50vh] lg:h-[70vh] min-h-[400px]">
            {/* Video Area */}
            <div className="absolute inset-4 lg:inset-6 xl:inset-8 z-20">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-[0_15px_40px_0_rgba(44,62,80,0.15)] border border-white/30 bg-white/10 backdrop-blur-sm">
                <video
                  src="/vid.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
              </div>
            </div>

            {/* Floating Images */}
            <div
              ref={topImg}
              className="absolute top-6 right-6 w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 z-30"
            >
              <img
                src="/ads.webp"
                alt="Lancôme fragrance collection"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg hover:scale-110 shadow-lg border border-white/50 transform rotate-0 hover:-rotate-3 transition-all duration-500 ease-out"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              />
            </div>

            <div
              ref={bottomImg}
              className="absolute bottom-6 left-6 w-24 h-32 md:w-32 md:h-40 lg:w-40 lg:h-48 z-30"
            >
              <img
                src="/ads2.jpg"
                alt="Lancôme premium bottles"
                loading="lazy"
                className="w-full h-full object-cover rounded-lg hover:scale-110 shadow-lg border border-white/50 transform rotate-0 hover:rotate-2 transition-all duration-500 ease-out"
                style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}
              />
            </div>

            {/* Floating Decorative Dots */}
            <div
              ref={dot1}
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-60 animate-pulse"
              style={{ boxShadow: '0 0 12px rgba(212, 175, 55, 0.7)' }}
            ></div>
            <div
              ref={dot2}
              className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#d4af37] rounded-full opacity-50 animate-pulse delay-1000"
              style={{ boxShadow: '0 0 12px rgba(212, 175, 55, 0.7)' }}
            ></div>
            <div
              ref={dot3}
              className="absolute top-2/3 right-1/3 w-2.5 h-2.5 bg-[#d4af37] rounded-full opacity-40 animate-pulse delay-2000"
              style={{ boxShadow: '0 0 15px rgba(212, 175, 55, 0.7)' }}
            ></div>
          </div>
        </div>
      </div>

      {/* Footer Marquee */}
      
    </>
  )
}

export default About