import React from 'react'
import CircularGallery from './Components/CircularGallery'

const Productpage = () => {
  // bg-gradient-to-br from-pink-50 via-[#fbe5e1] to-[#f3d7e5]
  return (
    <div className='  h-screen    flex flex-col  justify-between px-4'>
        <div className="">
             <h1 className="text-6xl md:text-8xl text-center font-semibold text-[#b1aeb4] mt-10">
      MEET THE WORLDS THINNEST <br /> FRAGRANCE BOTTLE
    </h1>

        </div>
        
            {/* <CircularGallery></CircularGallery> */}
        
    </div>
  )
}

export default Productpage