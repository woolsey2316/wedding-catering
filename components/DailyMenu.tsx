import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

/* Menu */
const DailyMenu = () => {
  return (
    <div className="lg:flex lg:items-center lg:justify-center mt-5 mx-auto">
      <div className="p-5 max-w-615">
        <h4 className="font-parisienne text-h1 font-semibold">Daily Menu</h4>
        <p className="font-rubik text-gray-700 mb-5">Et harum quidem rerum 
          facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil.
        </p>
        <ul className="mb-5 list-disc">
          <li className="flex">
            <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">Finger Foods</p>
            <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
            <p className="font-semibold text-coral text-xl font-rubik">$15</p>
          </li>
          <li className="flex">
            <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">Roasted Salmon</p>
            <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
            <p className="font-semibold text-coral text-xl font-rubik">$15</p>
          </li>
          <li className="flex">
            <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">Special Chicken</p>
            <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
            <p className="font-semibold text-coral text-xl font-rubik">$15</p>
          </li>
          <li className="flex">
            <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">Strawberry Cake</p>
            <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
            <p className="font-semibold text-coral text-xl font-rubik">$15</p>
          </li>
          <li className="flex">
            <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">Wedding Food</p>
            <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
            <p className="font-semibold text-coral text-xl font-rubik">$15</p>
          </li>
        </ul>
        <a className="flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2"><FontAwesomeIcon className="mr-3 mt-1" icon={faPhoneAlt}></FontAwesomeIcon>(01)-2345678</a>
      </div>
      <img className="max-w-full max-w-555 min-w-0 h-auto p-4" src="services/g1e-ojs6tq3cg4k059k15pjk204bm87b2ypqcove6tleds.jpg"/>
    </div>
  )
}
export { DailyMenu }