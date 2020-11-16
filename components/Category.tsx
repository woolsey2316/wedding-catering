import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

export interface Props {
  title: string;
  amount: number;
}

export function Category({ title, amount } : Props) {
  return (
    <div className="cursor-pointer border-b border-gray-400 flex items-center p-2 text-gray-900 hover:text-coral transition duration-300 ease-in-out">
      <FontAwesomeIcon className="text-xs mr-2 py-2px" icon={faChevronRight}/>
      <a href={`/category/${title}`} className="font-rubik">{title}</a>
      <p className="font-rubik font-medium italic text-gray-500 ml-auto">{`(${amount.toString()})`}</p>
    </div>
  )
}