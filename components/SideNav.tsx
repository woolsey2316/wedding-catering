import React from 'react'
import { BlogLinkContainer } from '../containers'

export default function SideNav() {
  return (
    <div className="hidden md:block sm:w-84 shadow px-5 py-8">
      <div className="w-1/2 mx-auto">
        <img className="h-auto max-w-full" src='/logo.png' alt="logo"/>
      </div>
      <div className="my-8">
        <ul>
          <li className="mb-6">
            <a className="font-medium text-gray-900 hover:text-coral transition-colors duration-300 ease-in-out" href="/Home">HOME</a>
          </li>
          <li className="mb-6">
            <a className="font-medium text-gray-900 hover:text-coral transition-colors duration-300 ease-in-out" href="/Services">SERVICES</a>
          </li>
          <li className="mb-6">
            <a className="font-medium text-gray-900 hover:text-coral transition-colors duration-300 ease-in-out" href="/About Us">ABOUT US</a>
          </li>
          <li className="mb-6">
            <a className="font-medium text-gray-900 hover:text-coral transition-colors duration-300 ease-in-out" href="/Contact Us">CONTACT US</a>
          </li>
          <li className="mb-6">
            <a className="font-medium text-gray-900 hover:text-coral transition-colors duration-300 ease-in-out" href="/Our Blog">OUR BLOG</a>
          </li>
        </ul>
      </div>
      <div>
        <h4 className="font-medium uppercase border-b border-gray-900">Recent Blog Posts</h4>
        <div className="absolute pt-px -mt-px mb-px bg-coral border-2 border-t border-coral w-10 mb-5"></div>
        <BlogLinkContainer/>
      </div>
    </div>
  )
}
export { SideNav }