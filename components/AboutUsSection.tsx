import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpandArrowsAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'

function AboutUsSection() {
  return (
    <>
    <div className="flex flex-col sm:flex-row items-center p-4">
      <div className="flex-1 mr-5">
        <h1 className="font-parisienne font-semibold text-5xl">About Us</h1>
        <p className="font-rubik text-gray-600">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
          placeat facere.
          <br/>
          <br/>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          lauda.
        </p>
      </div>
      <div className="w-1/3 relative mr-1">
        <div className="cursor-pointer w-88 h-64 bg-cover bg-food-on-stump hover:bg-food-on-stump-h text-xs hover:text-4xl transition-all duration-150 ease-in-out" >
          <FontAwesomeIcon
            className="parent-hover:size-0"
            icon={faExpandArrowsAlt}
            style={{ fontSize: 'inherit',color: 'white', position: 'absolute', top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
            />
        </div>
      </div>
      <div className="w-1/3 relative">
        <div className="cursor-pointer w-88 h-64 bg-cover bg-wedding-table text-xs hover:text-4xl hover:bg-wedding-table-h transition-all duration-300 ease-in-out" >
          <FontAwesomeIcon
            className="parent-hover:size-0"
            icon={faExpandArrowsAlt}
            style={{ color: 'white', position: 'absolute', top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
            />
        </div>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center p-4 mb-20">
      <div className="w-1/3 relative mr-1 inline-block">
        <div className="cursor-pointer w-88 h-64 bg-cover bg-cupcake hover:bg-cupcake-h text-xs hover:text-4xl transition-all duration-150 ease-in-out" >
          <FontAwesomeIcon
            className="parent-hover:size-0"
            icon={faExpandArrowsAlt}
            style={{ fontSize: 'inherit',color: 'white', position: 'absolute', top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
            />
        </div>
      </div>
      <div className="w-1/3 relative inline-block">
        <div className="cursor-pointer w-88 h-64 bg-cover bg-necklace text-xs hover:text-4xl hover:bg-necklace-h transition-all duration-300 ease-in-out" >
          <FontAwesomeIcon
            className="parent-hover:size-0"
            icon={faExpandArrowsAlt}
            style={{ color: 'white', position: 'absolute', top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
            />
        </div>
      </div>
      <div className="w-1/4 ml-5 inline-block">
        <p className="font-rubik text-gray-600 ml-2 mb-5">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
          placeat facere.
          <br/>
          <br/>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          lauda.
        </p>
        <a className="flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2"><FontAwesomeIcon className="mr-3 mt-1" icon={faPhoneAlt}></FontAwesomeIcon>(01)-2345678</a>
      </div>
    </div>
    <div className="w-full transform rotate-180" style={{bottom: '-19px'}} data-negative="false">
      <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
      <path className="fill-current text-gray-100" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
      c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
      c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
      </svg>		
    </div>
  </>
  )
}
export { AboutUsSection }