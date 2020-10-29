import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpandArrowsAlt,
} from '@fortawesome/free-solid-svg-icons'

function AboutUsSection() {
  return (
    <div className="flex flex-col sm:flex-row items-center p-4">
      <div className="flex-1 mr-5">
        <h1 className="font-parisienne font-semibold text-5xl">About Us</h1>
        <p className="font-rubik text-gray-600 font-medium">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
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
  )
}
export { AboutUsSection }