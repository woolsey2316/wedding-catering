import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGem,
} from '@fortawesome/free-regular-svg-icons'
import {
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import WhiteWavyCurve from '../wavy-curve/WhiteWavyCurve'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

function CallUsImage() {
  return (
    <div className="bg-platter-tint bg-center">
      <WhiteWavyCurve />
      <div className="lg:grid lg:grid-cols-2 p-10">
        <div className="col-start-2 my-auto p-5">
          <FontAwesomeIcon className="fa-3x text-white mb-5" icon={faGem as IconProp}></FontAwesomeIcon>
          <h1 className="font-parisienne text-white text-h1 font-semibold max-w-555">Wedding Catering Service For Your Happy Day</h1>  
          <p className="font-rubik text-white mt-5 mb-16 max-w-540">Et harum quidem rerum facilis est et expedita distinctio. 
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.</p>
          <a className="font-rubik cursor-pointer text-sm rounded-full font-medium text-white py-4 px-8 bg-coral hover:text-coral hover:bg-white">
            <FontAwesomeIcon className="text-inherit mr-2 fa-sm" icon={faPhone as IconProp}></FontAwesomeIcon>
            (01)23456789
          </a>
        </div>
      </div>
    </div>
  )
}
export { CallUsImage }