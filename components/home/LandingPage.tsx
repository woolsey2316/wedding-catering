import React from 'react'

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
      <div className="w-full transform rotate-180 absolute" style={{bottom: '-1px'}} data-negative="false">
        <svg className="lg:h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
    </div>
  )
}
export { LandingPage }