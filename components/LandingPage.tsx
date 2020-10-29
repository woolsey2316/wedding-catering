import React from 'react'

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen overflow-hidden" 
      style={{ 
        backgroundRepeat: "no-repeat",
        backgroundSize: "120%",
        backgroundImage: "linear-gradient(45deg, rgba(0,0,0,0.55),rgba(0,0,0,0.55)),url(home/1.jpg)"
      }}>
      <img className="height-auto w-48" src="home/2.png"></img>
      <h1 style={{fontFamily: "Parisienne"}} className="text-white font-semibold text-6xl">Wedding Catering Service</h1>
      <p className="text-white font-medium text-lg w-1/2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
      <a className="text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 mt-4">Discover More</a>
      <div className="absolute w-full transform rotate-180" style={{bottom: '-19px'}} data-negative="false">
        <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
    </div>
  )
}
export { LandingPage }