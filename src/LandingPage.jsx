import React from "react"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"
import Latest from "./Components/Latest"

const LandingPage = () => {
  // bg-gradient-to-br from-blue-100 via-pink-50 to-pink-100
 return (
    <div className="w-full  min:h-0 md:min-h-screen ">
      {/* <Nav/> */}
      <Hero/>
      <Latest></Latest>
    </div>
  )
}

export default LandingPage