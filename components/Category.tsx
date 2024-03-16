import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

export interface Props {
  title: string;
  amount: number;
}
/*
  Drop down component that reveals all blog posts belonging to a category
*/
const Category = ({ title, amount } : Props) => {
  return (
    <div className="cursor-pointer border-b border-gray-400 flex items-center p-2 text-gray-900 hover:text-coral transition duration-300 ease-in-out">
      <FontAwesomeIcon className="text-xs mr-2 py-2px" icon={faChevronRight as IconProp}/>
      <a href={`/category/${title.toLowerCase()}`} className="font-rubik">{title}</a>
      <p className="font-rubik font-medium italic text-gray-500 ml-auto">{`(${amount.toString()})`}</p>
    </div>
  )
}
export { Category }