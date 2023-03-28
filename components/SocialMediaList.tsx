import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons'

function SocialMediaList() {
  return (
    <>
      <div className="flex items-center mr-5">
        <FontAwesomeIcon style={{color: "#0d47a1"}} icon={faFacebookF}/>
        <a className="hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out">Facebook</a>
      </div>
      <div className="flex items-center mr-5">
        <FontAwesomeIcon style={{color: "#4D7A9E"}} icon={faInstagram}/>
        <a className="hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out">Instagram</a>
      </div>
      <div className="flex items-center mr-5">
        <FontAwesomeIcon style={{color: "#ff0000"}} icon={faYoutube}/>
        <a className="hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out">Youtube</a>
      </div>
      <div className="flex items-center mr-5">
        <FontAwesomeIcon style={{color: "#40c4ff"}} icon={faTwitter}/>
        <a className="hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out">Twitter</a>
      </div>
      <div className="flex items-center mr-5">
        <FontAwesomeIcon style={{color: "#bd081c"}} icon={faPinterestP}/>
        <a className="hidden md:block ml-2 uppercase cursor-pointer font-nunito font-bold text-gray-500 text-sm hover:text-coral transition-color duration-500 ease-in-out">Pinterest</a>
      </div>
    </>
   );
}

export default SocialMediaList;