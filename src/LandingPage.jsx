import React from "react"
import Navigation from "./Components/Navigation"
import Hero from "./Components/Hero"
import Nav from "./Components/Nav"

const LandingPage = () => {
  // bg-gradient-to-br from-blue-100 via-pink-50 to-pink-100
 return (
    <div className="w-full overflow-x-hidden min-h-screen ">
      <Nav/>
      <Hero/>
    </div>
  )
}

export default LandingPage