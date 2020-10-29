import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
} from '@fortawesome/free-solid-svg-icons'

export default function Rating() {
  return (
    <div className="flex mt-8">
      <FontAwesomeIcon className="text-gold-800 mr-1" icon={faStar}/>
      <FontAwesomeIcon className="text-gold-800 mr-1" icon={faStar}/>
      <FontAwesomeIcon className="text-gold-800 mr-1" icon={faStar}/>
      <FontAwesomeIcon className="text-gold-800 mr-1" icon={faStar}/>
      <FontAwesomeIcon className="text-gold-800 mr-1" icon={faStar}/>
    </div>
  )
}