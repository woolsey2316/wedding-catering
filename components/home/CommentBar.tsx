import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {
  faHeart,
  faComment
} from '@fortawesome/free-regular-svg-icons'
import SocialMediaQuilt from './SocialMediaQuilt'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

export interface Props {
  total: number,
  likes: number
}
/*
  A comment bar containing social media links, comment number and number of likes
  situated above the comments
*/
export function CommentBar({total, likes} : Props) {
  return (
    <div className="flex justify-center items-center border-t border-b border-gray-300 text-gray-700 mt-5">
      <FontAwesomeIcon className="text-sm mr-2" icon={faComment as IconProp}/>
      <p className="">{`${total} ${ total === 1 ? " comment" : " comments"}`}</p>
      <p className="text-gray-300 mx-6">|</p>
      <p className="font-bold text-coral italic">{likes}</p>
      <FontAwesomeIcon className="text-sm ml-1" icon={faHeart as IconProp}/>
      <p className="text-gray-300 mx-6">|</p>
      <SocialMediaQuilt />
    </div>
  )
}