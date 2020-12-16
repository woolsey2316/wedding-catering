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
  faHeart,
  faComment
} from '@fortawesome/free-regular-svg-icons'

export interface Props {
  total: number,
  likes: number
}
export function CommentSection({total, likes} : Props) {
  return (
    <div className="flex justify-center items-center border-t border-b border-gray-300 text-gray-700 mt-5">
      <FontAwesomeIcon className="text-sm mr-2" icon={faComment}/>
      <p className="">{`${total} comment`}</p>
      <p className="text-gray-300 mx-6">|</p>
      <p className="font-bold text-coral italic">{likes}</p>
      <FontAwesomeIcon className="text-sm ml-1" icon={faHeart}/>
      <p className="text-gray-300 mx-6">|</p>
      <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faFacebookF}/></div>
        <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faTwitter}/></div>
        <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faInstagram}/></div>
        <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faPinterest}/></div>
        <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faBehance}/></div>
        <div className="cursor-pointer w-8 py-2 text-center text-gray-900 text-lg hover:text-coral hover:border-transparent transition duration-300 ease-in-out"><FontAwesomeIcon icon={faYoutube}/></div>
    </div>
  )
}