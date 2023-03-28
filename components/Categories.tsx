import React from 'react'
import { Category } from './Category'

/* 
  A series of links that direct to a individual category blog page
*/
const Categories = () => {
  return (
    <div className="mb-12">
      <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2">Categories</h4>
      <div className="absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"></div>
      <Category title="Beauty" amount={4}/>
      <Category title="Photos" amount={4}/>
      <Category title="Planning" amount={4}/>
    </div>
  )
}
export { Categories }