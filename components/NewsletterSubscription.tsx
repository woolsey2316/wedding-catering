import React from 'react'

export function NewsletterSubscription() {
  return (
    <div className="mb-12">
      <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2">Newsletter</h4>
      <div className="absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"></div>
      <p className="font-rubik text-gray-800 text-sm text-center mt-5">Subscribe to our newsletter for latest news, service and promo. Let's stay updated</p>
      <input 
        className="border border-gray-400 text-xs px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-800"
        placeholder="Name..."/>
      <input 
        className="border border-gray-400 text-xs px-4 py-2 w-full mt-4 placeholder-gray-600 text-gray-800"
        placeholder="Email..."/>
      <button
        type="submit"
        className="hover:text-white font-rubik w-full text-sm font-medium cursor-pointer py-3 px-8 mt-5 mx-auto hover:bg-coral bg-gray-200 text-grey-700 transition-all duration-300 ease-in-out"
      >
        SUBSCRIBE
      </button>
    </div>
  )
}