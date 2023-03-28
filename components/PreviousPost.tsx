import React from 'react'

export interface Props {
  title: string
} 

export function PreviousPost({title} : Props) {
  return (
    <div className="border-b border-gray-300 pt-2 pb-5">
      <p className="text-gray-600 font-rubik">previous post</p>
      <div className="w-1/2">
        <a className="cursor-pointer uppercase text-gray-900 text-base leading-none font-rubik hover:text-coral transition duration-300 ease-in-out">
          {title}
        </a>
      </div>
    </div>
  )
}