import React from 'react'

export interface Props {
  key: number;
  link: string;
  image: string;
  title: string;
  date?: string;
  index?: number;
}

interface Blog {
  image: string;
  link: string;
  title: string;
  author: string;
  date: string;
  category: string;
}

function DetailedBlogLinkThumbnail({blog, key}) {
  return (
    <div onClick={() => {window.location.href = blog.link}} className="xl:grid grid-cols-12 mt-6 pb-8 border-b border-gray-300">
      <img className="max-w-full height-auto w-full col-span-6 cursor-pointer hover:opacity-75 transition-opacity duration-300 ease-in-out mb-4" src={`/${blog.image}`}/>
      <div className="xl:col-start-7 xl:col-span-6 pl-5">
        <p className="text-coral text-sm mb-2">{blog.category}</p>
        <h4 className="font-nunito font-bold uppercase leading-snug text-lg text-gray-900 cursor-pointer hover:text-coral transition-colors duration-300 ease-in-out">{blog.title}</h4>
        <div className="flex mt-4 items-center">
          <p className="font-rubik text-gray-600 mr-1">by</p> 
          <p className="cursor-pointer text-sm font-rubik text-gray-900 hover:text-coral transition-color duration-300 ease-in-out">{blog.author}</p>
          <p className="font-rubik text-gray-600 text-xs mx-4">|</p>
          <p className="font-rubik text-sm text-gray-600">{blog.date}</p>
        </div>
        <div className="border-b border-coral w-16 pb-4"/>
        <p className="text-gray-900 font-rubik mt-4 text-sm">Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, 
          pellentesque eu, pretium quis, sem. Nulla…
        </p>
      </div>
    </div>
  )
}
export { DetailedBlogLinkThumbnail }