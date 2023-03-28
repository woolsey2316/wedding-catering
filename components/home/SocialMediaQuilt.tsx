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

function SocialMediaQuilt() {
  return (
    <>
    <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faFacebookF}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faTwitter}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faInstagram}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faPinterest}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faBehance}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faYoutube}/>
      </div>
      </>
   );
}

export default SocialMediaQuilt;