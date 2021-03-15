import React from 'react'

function ServicesSection() {
  return (
    <>
    <div className="bg-gray-100">
      <div className="flex-1 mr-5 pt-24 pb-5">
        <h1 className="font-parisienne font-semibold text-5xl text-center">Our Services</h1>
        <p className="font-rubik text-gray-600 text-center md:px-12 max-w-570 mx-auto">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
          placeat facere.
        </p>
      </div>
      <div className="w-full lg:flex lg:justify-center">
        <div className="bg-white lg:max-w-570 m-4">
          <img src="home/3-1024x683.jpg"/>
          <div className="p-10">
            <h1 className="font-parisienne font-semibold text-5xl">Wedding Catering</h1>
            <p className="font-rubik text-gray-600">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
              placeat facere.
            </p>
          </div>
        </div>
        <div className="bg-white lg:max-w-570 m-4">
          <img src="home/4-1024x683.jpg"/>
          <div className="p-10">
            <h1 className="font-parisienne font-semibold text-5xl">Wedding Gifts</h1>
            <p className="font-rubik text-gray-600">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
              cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
              placeat facere.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full lg:grid lg:grid-cols-2 mt-8 pb-20 lg:items-center max-w-1170 xl:mx-auto">
        <img className="max-w-100 h-auto w-full" src="home/5-1024x681.jpg"/>
        <div className="p-10 h-full bg-white">
          <h1 className="font-parisienne font-semibold text-5xl mb-2">Wedding Cakes</h1>
          <p className="font-rubik text-gray-600 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-semibold bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out"> Learn More</a>
        </div>
      </div>
    </div>
    <div className="w-full transform" style={{bottom: '-19px'}} data-negative="false">
      <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path className="fill-current text-gray-100" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
      c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
      c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
      </svg>		
    </div>
    </>
  )
}
export { ServicesSection }