import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGem,
} from '@fortawesome/free-regular-svg-icons'

function CallUsImage() {
  return (
    <div className="bg-platter-tint bg-cover h-screen">
      <div className="w-full bg-transparent" style={{bottom: '-19px'}} data-negative="false">
        <svg className="lg:h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 100" preserveAspectRatio="none">
        <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
      <div className="lg:grid lg:grid-cols-2">
        <div className="col-start-2 my-auto p-5">
          <FontAwesomeIcon className="text-5xl text-white mb-5" icon={faGem}></FontAwesomeIcon>
          <h1 className="font-parisienne text-white text-h1 font-semibold">Wedding Catering Service For Your Happy Day</h1>  
          <p className="font-rubik text-white mt-5 mb-16">Et harum quidem rerum facilis est et expedita distinctio. 
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.</p>
          <a className="font-rubik cursor-pointer text-sm rounded-full font-medium text-white py-4 px-12 bg-coral hover:text-coral hover:bg-white">
            (01)23456789
          </a>
        </div>
      </div>
    </div>
  )
}
export { CallUsImage }