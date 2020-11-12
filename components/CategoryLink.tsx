import React from 'react'

export interface Props {
  title: string
}

export function CategoryLink({title} : Props) {
  return (
  <a className="cursor-pointer mr-2 px-2 text-xs border border-gray-400 text-gray-700 hover:border-transparent hover:text-white hover:bg-coral transition duration-300 ease-in-out uppercase">{title}</a>
  )
}