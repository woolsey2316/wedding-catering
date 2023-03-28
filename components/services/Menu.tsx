import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import MenuItem from './MenuItem'
const MENU = [
  {
    food: "Finger Foods",
    price: "$12",
  },{
    food: "Roasted Salmon",
    price: "$16",
  },{
    food: "Special Chicken",
    price: "$18",
  },{
    food: "Strawberry Cake",
    price: "$12",
  },{
    food: "Wedding Food",
    price: "$11",
  }
]
interface Props {
  menuType: string;
  description: string;
  xFlip?: boolean;
  img: string
}
const Menu = ({menuType, description, img, xFlip = false}) => {
  return (
    <div className={`${xFlip ? "lg:flex-row-reverse" : ""} lg:flex lg:items-center lg:justify-center mt-5`}>
      <img className="h-auto max-w-555 min-w-0 p-4 mdx:p-10" src={img}/>
      <div className="p-5 max-w-615">
        <h4 className="font-parisienne text-6xl font-semibold">{menuType}</h4>
        <p className="font-rubik text-gray-700 mb-5">{description}
        </p>
        <ul className="mb-5 list-disc">
        {MENU.map(item => 
          <MenuItem food={item.food} price={item.price}/>
        )}
        </ul>
        <a className="flex items-center w-48 text-white cursor-pointer font-bold bg-coral hover:text-coral rounded-full hover:bg-white transition-all duration-300 ease-in-out py-3 px-8 ml-2">
          <FontAwesomeIcon className="mr-3 mt-1" icon={faPhoneAlt}></FontAwesomeIcon>(01)-2345678
        </a>
      </div>
    </div>
  )
}
export { Menu }