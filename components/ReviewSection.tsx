import React from 'react'
import Rating from './Rating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function ReviewSection() {
  return (
    <div className="w-full bg-cover bg-scene-tint text-center mb-24" >
      <div className="flex flex-col items-center py-20 lg:p-20">
        <h1 className="font-parisienne font-semibold text-5xl text-white">What Customers Say</h1>
        <p className="font-rubik text-white md:px-24 -mb-20">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil 
        </p>
        <AwesomeSlider
          className="h-screen lg:h-auto"
          organicArrows={false}
          buttonContentRight={
            <div className="rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center">
              <FontAwesomeIcon className="text-gray-900" icon={faChevronRight}/>
            </div>
          }
          buttonContentLeft={
            <div className="rounded-full bg-white opacity-75 hover:opacity-100 mt-24 w-8 h-8 cursor-pointer flex flex-col justify-center items-center">
              <FontAwesomeIcon className="text-gray-900" icon={faChevronLeft}/>
            </div>
          }
          infinite={true}
          bullets={false}>
          <div className="flex flex-col items-center bg-transparent">
            <p className="font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto">“</p>
            <p className="font-playfair text-white text-xl italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium,
              totam rem aperiam, eaque ipsa quae ab illo, viva la vida.
            </p>
            <Rating/>
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8">
              <img src="home/ava1.jpg"></img>  
            </div>
            <p className="text-white font-nunito text-lg font-bold mt-3">John Travolta</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <p className="font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-4 mx-auto">“</p>
            <p className="font-playfair text-white text-xl italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium,
              totam rem aperiam, eaque ipsa quae ab illo, viva la vida.
            </p>
            <Rating/>
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8">
              <img src="home/ava2.jpg"></img>  
            </div>
            <p className="text-white font-nunito text-lg font-bold mt-3">Kelly Clarkson</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <p className="font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto">“</p>
            <p className="font-playfair text-white text-xl italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium,
              totam rem aperiam, eaque ipsa quae ab illo, viva la vida.
            </p>
            <Rating/>
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8">
              <img src="home/ava3.jpg"></img>  
            </div>
            <p className="text-white font-nunito text-lg font-bold mt-3">Kurt Russel</p>
          </div>
          <div className="flex flex-col items-center bg-transparent">
            <p className="font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto">“</p>
            <p className="font-playfair text-white text-xl italic">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium,
              totam rem aperiam, eaque ipsa quae ab illo, viva la vida.
            </p>
            <Rating/>
            <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8">
              <img src="home/ava4.jpg"></img>  
            </div>
            <p className="text-white font-nunito text-lg font-bold mt-3">John Travolta</p>
          </div>
        </AwesomeSlider>
      </div>
    </div>
  )
}
export { ReviewSection }