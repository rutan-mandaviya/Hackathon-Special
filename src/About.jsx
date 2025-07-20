import React from 'react'

const About = () => {
  return (
    <div className='h-screen bg-gradient-to-br from-pink-50 via-[#fbe5e1] to-[#f3d7e5] relative flex justify-between items-center px-4'>

      {/* Top-right image */}
      <img className='w-[25%] h-[40%] rounded-2xl absolute top-10 left-2/3 z-10 object-cover object-[0%_20%]' src="/ads.webp" alt="" />

      {/* Central video */}
      <video
        src="/vid.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="h-[50%] w-[90%] mx-auto z-20 rounded-2xl overflow-hidden"
      ></video>

      {/* Bottom-left image */}
      <img className='w-[25%] h-[40%] rounded-2xl absolute bottom-10 left-40 z-10 object-cover object-[0%_20%]' src="/ads2.jpg" alt="" />

      {/* About Text Section */}
      <div className='absolute top-30 left-42 transform -translate-y-1/2 z-30 w-[40%]'>
        <h1 className='text-4xl font-bold text-pink-800 mb-4'>About Us</h1>
        At <strong>Lancôme</strong>, fragrance is more than just a scent — it’s a <em>symphony of emotion, elegance, and empowerment</em>.
    We blend timeless French luxury with modern sophistication, crafting perfumes that speak to your soul.
    Our mission is to deliver not just a fragrance, but an experience that leaves a lasting impression.
   
      </div>
    </div>
  )
}

export default About
