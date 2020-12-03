import React from 'react'

interface Props {
  author: string,
  category: string,
  src: string,
  date: string,
  title: string,
  preview: string,
  link: string
}

function BlogTile(props: Props) {
  return (
    <>
      <div className="col-span-6">
        <img onClick={() => {window.location.href = props.link}} className="cursor-pointer hover:opacity-85 transition-all duration-500 ease-in-out mb-4" src={props.src}/>
        <a href={`/category/${props.category}`} className="block cursor-pointer text-sm text-coral mb-2">{props.category}</a>
        <a href={`/${props.link}`} className="block cursor-pointer font-nunito font-bold leading-tight text-h4 text-gray-900 hover:text-gray-600 transition-color duration-500 ease-in-out">{props.title}</a>
        <div className="flex mt-4 items-center">
          <p className="font-rubik text-gray-600 mr-1">by</p> 
          <p className="cursor-pointer font-rubik text-gray-900 hover:text-coral transition-color duration-300 ease-in-out">{props.author}</p>
          <p className="font-rubik text-gray-600 text-xs mx-4">|</p>
          <p className="font-rubik text-gray-600">{props.date}</p>
        </div>
        <p className="font-nunito text-gray-900 mt-4">{props.preview}</p>
      </div>
    </>
  )
}
export { BlogTile }