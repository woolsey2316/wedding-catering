import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faLeaf,
  faUsers,
  faThumbsUp,
  faList

} from '@fortawesome/free-solid-svg-icons'

import {
  faCalendarMinus

} from '@fortawesome/free-solid-svg-icons'

function FeatureSection() {
  return (
      <div className="grid grid-cols-12 py-10 px-4 mt-48">
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faCheck}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">10 Years Experience</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faLeaf}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Wedding Specialisation</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faUsers}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Professional Staffs</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faList}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Tasty Menu</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faThumbsUp}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">Safe Ingredients</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
        <div className="col-span-4 flex">
          <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
            <FontAwesomeIcon className="text-3xl text-white" icon={faCalendarMinus}></FontAwesomeIcon>
          </div>
          <div className="p-5 flex-1">
            <h1 className="font-nunito text-2xl font-bold mb-2">24 Hour Services</h1>
            <p className="font-rubik text-gray-700">
            Sed ut perspiciatis unde omnis iste natus error 
            sit voluptatem accusantium dolor emque laudantium,
            totam rem.
            </p>
          </div>
        </div>
      </div>
  )
}
export { FeatureSection }