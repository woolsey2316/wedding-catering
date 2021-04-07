import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faExpandArrowsAlt,
  faPhoneAlt
} from '@fortawesome/free-solid-svg-icons'

/*
  About Us section at home page
*/
function AboutUsSection() {
  return (
    <>
    <div className="flex flex-col sm:flex-row items-center p-4 max-w-6xl mx-auto mt-12">
      <div className="w-full flex-1 mr-5 max-w-540">
        <h1 className="font-parisienne font-semibold text-5xl">About Us</h1>
        <p className="font-rubik text-gray-600 mb-4">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime 
          placeat facere.
          <br/>
          <br/>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque 
          lauda.
        </p>
      </div>
      <div className="w-full sm:mb-0 sm:w-1/3 relative mr-0 sm:mr-1">
        <a href="/_next/static/media/g1e-768x512.87f7437b7e5f727b60de48830bce3ea6.jpg">
          <div className="mb-4 sm:mb-0 cursor-pointer bg-cover text-transparent shadow-inner-opaque hover:text-white hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out" >
            <img className="max-w-full w-full h-auto" src="/home/g1e-768x512.jpg"/>
            <FontAwesomeIcon
              className="parent-hover:size-0 absolute"
              icon={faExpandArrowsAlt}
              style={{ top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
            />
          </div>
        </a>
      </div>
      <div className="w-full sm:w-1/3 relative">
        <a href="/_next/static/media/g2-768x512.ebdbf48ac1c1b7739c0a8b5e08a0feb1.jpg">
          <div className="cursor-pointer text-transparent shadow-inner-opaque hover:text-white bg-cover hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out" >
            <img className="max-w-full w-full h-auto" src="/home/g2-768x512.jpg"/>
            <FontAwesomeIcon
              className="parent-hover:size-0 absolute"
              icon={faExpandArrowsAlt}
              style={{ top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
              />
          </div>
        </a>
      </div>
    </div>
    <div className="flex flex-col sm:flex-row items-center p-4 mb-20 max-w-6xl mx-auto">
      <div className="w-full sm:w-1/3 relative mr-0 sm:mr-1 inline-block">
        <a href="/_next/static/media/g4-768x613.bc53d5f3697e416c0dcb3b46f34a77c7.jpg">
          <div className="mb-4 sm:mb-0 cursor-pointer text-transparent shadow-inner-opaque hover:text-white bg-cover hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out" >
            <img className="max-w-full w-full h-auto" src="/home/g4-768x512.jpg"/>
            <FontAwesomeIcon
              className="parent-hover:size-0 absolute"
              icon={faExpandArrowsAlt}
              style={{ top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
              />
          </div>
        </a>
      </div>
      <div className="w-full sm:w-1/3 relative inline-block">
        <a href="/_next/static/media/g3-768x513.482360b5cb3722435e20df6ba6daac15.jpg">
          <div className="cursor-pointer text-transparent shadow-inner-opaque hover:text-white bg-cover hover:text-4xl hover:shadow-inner-full text-xs hover:text-4xl transition-all duration-500 ease-in-out" >
            <img className="w-full h-auto" src="/home/g3-768x513.jpg"/>
            <FontAwesomeIcon
              className="parent-hover:size-0 absolute"
              icon={faExpandArrowsAlt}
              style={{ top: 'calc(50% - 0.5em)', left: 'calc(50% - 0.5em)' }}
              />
          </div>
        </a>
      </div>
      <div className="w-full sm:w-1/3 ml-5 inline-block">
        <p className="font-rubik text-gray-600 ml-2 mb-5 mt-12 lg:mt-0">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
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
    <div className="w-full lg:w-full transform rotate-180" style={{bottom: '-19px'}} data-negative="false">
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