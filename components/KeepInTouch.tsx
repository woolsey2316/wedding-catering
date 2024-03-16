import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faPinterest,
  faBehance,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

export default function KeepInTouch() {
  return (
    <>
      <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2">Keep in Touch</h4>
      <div className="absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"></div>
      <div className="flex py-10 px-2">
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faFacebookF as IconProp}/>
        </div>
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faTwitter as IconProp}/>
        </div>
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faInstagram as IconProp}/>
        </div>
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faPinterest as IconProp}/>
        </div>
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faBehance as IconProp}/>
        </div>
        <div className="cursor-pointer rounded-full border border-gray-300 mr-2 w-10 h-10 py-2 text-center hover:bg-coral hover:text-white hover:border-transparent transition duration-300 ease-in-out">
          <FontAwesomeIcon className="text-lg" icon={faYoutube as IconProp}/>
        </div>
      </div>
    </>
  )
}