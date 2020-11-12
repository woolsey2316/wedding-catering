import React from 'react'
import { BlogLinkContainer } from '../containers'

export default function SideNav() {
  return (
    <div className="sidenav h-full lg:shadow fixed overflow-y-scroll block transform -translate-x-111 lg:translate-x-0 transition-all duration-500 ease-in-out">
      <div className="h-full bg-white block w-84 px-5 py-8 flex-none transform -translate-x-84 lg:translate-x-0 transition-all duration-500 ease-in-out">
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
        <div className="mb-5">
          <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2">Recent Posts</h4>
          <div className="absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"></div>
          <BlogLinkContainer/>
        </div>
      </div>
    </div>
  )
}
export { SideNav }