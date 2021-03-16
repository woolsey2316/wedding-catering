import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

const ServicesSection = () => {
  return (
    <div className="max-w-1170 mx-auto">
      <div className="lg:flex items-center xl:items-stretch mt-20">
        <img className="w-full lg:w-1/2" src="home/3-1024x683.jpg"/>
        <div className="max-w-585 p-10 bg-gray-100 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Catering</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out">
            Call Us Now
            <FontAwesomeIcon className="text-sm ml-2" icon={faLongArrowAltRight}/>
          </a>
        </div>
      </div>
      <div className="lg:flex items-center xl:items-stretch">
        <div className="max-w-585 p-10 bg-gray-100 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Gifts</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out">
            Call Us Now
            <FontAwesomeIcon className="text-sm ml-2" icon={faLongArrowAltRight}/>
          </a>
        </div>
        <img className="w-full lg:w-1/2" src="home/4-1024x683.jpg"/>
      </div>
      <div className="lg:flex items-center xl:items-stretch mb-24">
        <img className="w-full lg:w-1/2" src="home/5-1024x681.jpg"/>
        <div className="max-w-585 p-10 bg-gray-100 lg:flex lg:flex-col lg:justify-center lg:items-start">
          <h1 className="font-parisienne font-semibold text-h2">Wedding Gifts</h1>
          <p className="font-rubik text-gray-700 mb-10">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
            cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
            placeat facere.
          </p>
          <a className="cursor-pointer py-3 px-8 rounded-full font-semibold bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out">
            Learn More
            <FontAwesomeIcon className="text-sm ml-2" icon={faLongArrowAltRight}/>
          </a>
        </div>
      </div>
    </div>
  )
}
export { ServicesSection }