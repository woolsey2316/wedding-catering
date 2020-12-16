import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faKey,
  faPhoneAlt,

} from '@fortawesome/free-solid-svg-icons'

function ContactSection() {
  return (
    <>
      <div className="w-full transform rotate-180" style={{bottom: '-19px'}} data-negative="false">
        <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="fill-current text-gray-100" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
      <div className="lg:flex bg-gray-100 py-10 px-4">
        <div className="flex">
          <div className="flex flex-col justify-center items-center rounded-full text-2xl w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-white" icon={faKey}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Office Location</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center rounded-full text-2xl w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-white" icon={faEnvelope}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Email Address</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-center items-center rounded-full text-2xl w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-white" icon={faPhoneAlt}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Phone Number</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
export { ContactSection }