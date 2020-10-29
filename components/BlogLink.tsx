import React from 'react'

export interface Props {
  key: number;
  image: string;
  title: string;
}

function BlogLink({ image, title } : Props) {
  return (
    <div className="flex mt-6">
      <img className="max-w-full height-auto w-32 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out" src={image}></img>
      <h4 className="font-nunito font-bold ml-5 text-sm text-gray cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out">{title}</h4>
    </div>
  )
}
export { BlogLink }