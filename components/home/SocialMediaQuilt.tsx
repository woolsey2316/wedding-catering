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
import { IconProp } from '@fortawesome/fontawesome-svg-core';

function SocialMediaQuilt() {
  return (
    <>
    <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faFacebookF as IconProp}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faTwitter as IconProp}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faInstagram as IconProp}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faPinterest as IconProp}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faBehance as IconProp}/>
      </div>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out">
        <FontAwesomeIcon icon={faYoutube as IconProp}/>
      </div>
      </>
   );
}

export default SocialMediaQuilt;