import React from 'react'
import BottomWhiteWavyCurve from '../wavy-curve/BottomWhiteWavyCurve'

function LandingPage() {
  return (
    <div className="relative flex flex-col items-center justify-center lg:h-screen overflow-hidden" 
      style={{ 
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(home/1.jpg)"
      }}>
      <img className="h-42 w-48 mt-32 lg:mt-0" src="home/2.png"></img>
      <h1 className="font-parisienne text-center text-white font-semibold text-6xl">Wedding Catering Service</h1>
      <p className="text-white text-center font-rubik text-lg max-w-540">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <a className="text-white cursor-pointer font-bold bg-coral mb-32 lg:mb-5 hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 mt-4">Discover More</a>
      <BottomWhiteWavyCurve />
    </div>
  )
}
export { LandingPage }