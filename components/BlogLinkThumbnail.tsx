import React from 'react'

export interface Props {
  key: number;
  link: string;
  image: string;
  title: string;
  date?: string;
}

function BlogLinkThumbnail({ image, title, link, date } : Props) {
  return (
    <div onClick={() => {window.location.href = link}} className="flex flex-col mt-6">
      <img className="max-w-full height-auto w-full cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out mb-4" src={`/${image}`}/>
      <h4 className="font-nunito font-bold leading-snug text-sm text-gray-800 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out">{title}</h4>
      <p className="font-rubik text-gray-600 text-sm mt-1">{date}</p>
    </div>
  )
}
export { BlogLinkThumbnail }