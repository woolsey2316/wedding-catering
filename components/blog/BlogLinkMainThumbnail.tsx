import React from 'react'

export interface Props {
  key: number;
  link: string;
  image: string;
  title: string;
}

function BlogLinkMainThumbnail({ image, title, link } : Props) {
  return (
    <div onClick={() => {window.location.href = link}} className="flex flex-col mt-6">
      <img className="max-w-full height-auto w-full cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out mb-4" src={`/${image}`}/>
      <h4 className="font-nunito font-bold text-lg text-gray-800 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out">
        {title}
      </h4>
    </div>
  )
}
export { BlogLinkMainThumbnail }