import React from 'react'
import Rating from './Rating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function ReviewSection2() {
  return (
    <>
    <div className="w-full bg-cover bg-scene-tint text-center my-24" >
      <div className="flex flex-col items-center">
        <div className="w-full bg-transparent" style={{bottom: '-19px'}} data-negative="false">
          <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
          <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
          </svg>		
        </div>
        <h1 className="font-parisienne px-20 font-semibold text-h1 text-white">What Customers Say</h1>
        <p className="font-rubik text-white px-24 -mb-20">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil 
        </p>
        <AwesomeSlider
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
      <div className="w-full transform rotate-180 bg-transparent" style={{bottom: '-19px'}} data-negative="false">
        <svg className="h-24 w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path className="fill-current text-white" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
        c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
        c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg>		
      </div>
    </div>
  </>
  )
}
export { ReviewSection2 }