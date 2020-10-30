import React from 'react'

function ServicesSection2() {
  return (
    <>
      <div className="flex mt-20">
        <img className="w-1/2" src="home/3-1024x683.jpg"/>
        <div className="p-10 bg-gray-100">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Catering</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out"> Call Us Now</a>
        </div>
      </div>
      <div className="flex">
        <div className="p-10 bg-gray-100">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Gifts</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out"> Call Us Now</a>
        </div>
        <img className="w-1/2" src="home/4-1024x683.jpg"/>
      </div>
      <div className="flex mb-24">
        <img className="w-1/2" src="home/5-1024x681.jpg"/>
        <div className="p-10 bg-gray-100">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Gifts</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-semibold bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out"> Learn More</a>
        </div>
      </div>
    </>
  )
}
export { ServicesSection2 }