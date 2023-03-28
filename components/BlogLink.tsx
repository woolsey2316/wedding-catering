import React from 'react'

export interface Props {
  link: string;
  image: string;
  title: string;
}

/* 
  A blog link on the right aside
*/
function BlogLink({ image, title, link } : Props) {
  return (
    <div onClick={() => {window.location.href = link}} className="flex mt-6">
      <img className="max-w-full height-auto w-32 flex-shrink-0 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out" src={`/${image}`}/>
      <h4 className="font-nunito font-bold ml-5 text-sm text-gray-900 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out">{title}</h4>
    </div>
  )
}
export { BlogLink }
