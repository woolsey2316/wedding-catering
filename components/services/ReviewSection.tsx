import React from 'react'
import Rating from '../Rating'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons'

import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import WhiteWavyCurve from '../wavy-curve/WhiteWavyCurve';
import BottomWhiteWavyCurve from '../wavy-curve/BottomWhiteWavyCurve';
import CustomerReview from './CustomerReview';
const CUSTOMER_REVIEW = [
  {
    review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida.",
    img: "home/ava1.jpg",
    name: "John Travolta"
  },{
    review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida.",
    img: "home/ava2.jpg",
    name: "Kelly Clarkson"
  },{
    review: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor em que laudantium, totam rem aperiam, eaque ipsa quae ab illo, viva la vida.",
    img: "home/ava3.jpg",
    name: "Kurt Russel"
  }
]
const ReviewSection = () => {
  return (
    <>
    <div className="bg-cover bg-scene-tint text-center my-24" >
      <div className="flex flex-col items-center">
        <WhiteWavyCurve />
        <h1 className="font-parisienne px-20 font-semibold text-h1 text-white">What Customers Say</h1>
        <p className="font-rubik text-white max-w-540 px-4">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
          cum soluta nobis est eligendi optio cumque nihil 
        </p>
        <AwesomeSlider
          className="px-4 h-132"
          organicArrows={false}
          buttonContentRight={
            <div className="rounded-full bg-white opacity-75 hover:opacity-100 w-8 h-8 cursor-pointer flex flex-col justify-center items-center">
              <FontAwesomeIcon className="text-gray-900" icon={faChevronRight}/>
            </div>
          }
          buttonContentLeft={
            <div className="rounded-full bg-white opacity-75 hover:opacity-100 w-8 h-8 cursor-pointer flex flex-col justify-center items-center">
              <FontAwesomeIcon className="text-gray-900" icon={faChevronLeft}/>
            </div>
          }
          infinite={true}
          bullets={false}>
           
          {CUSTOMER_REVIEW.map((info, index) => 
            <div className="h-full flex flex-col items-center bg-transparent">
              <CustomerReview key={index} img={info.img} name={info.name} review={info.review}/>
            </div>
            )}
        </AwesomeSlider>
        <BottomWhiteWavyCurve yOffset="-100px" />
      </div>
    </div>
  </>
  )
}
export { ReviewSection }