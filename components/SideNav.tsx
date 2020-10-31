import React from 'react'
import { BlogLinkContainer } from '../containers'

export default function SideNav() {
  return (
    <div className="hidden md:block w-84 shadow px-5 py-8 z-50 flex-none">
      <div className="w-1/2 mx-auto">
        <img className="h-auto max-w-full" src='/logo.png' alt="logo"/>
      </div>
      <div className="my-10">
        <ul>
          <li className="mb-5">
            <a className="font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out" href="/Home">HOME</a>
          </li>
          <li className="mb-5">
            <a className="font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out" href="/Services">SERVICES</a>
          </li>
          <li className="mb-5">
            <a className="font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out" href="/AboutUs">ABOUT US</a>
          </li>
          <li className="mb-5">
            <a className="font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out" href="/ContactUs">CONTACT US</a>
          </li>
          <li className="mb-5">
            <a className="font-nunito font-bold text-gray-800 hover:text-coral transition-colors duration-300 ease-in-out" href="/OurBlog">OUR BLOG</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800">Recent Posts</h4>
        <div className="absolute pt-px -mt-px mb-px bg-coral border-2 border-t border-coral w-10 mb-5"></div>
        <BlogLinkContainer/>
      </div>
    </div>
  )
}
export { SideNav }