import React from 'react'
import BottomWhiteWavyCurve from '../wavy-curve/BottomWhiteWavyCurve'

const BlogSection = () => {
  return (
    <div className="bg-gray-100">
      <div className="relative text-center pt-20 pb-32 ">
        <h1 className="font-parisienne text-h1 font-semibold ">Our Blog</h1>
        <p className="text-gray-700 font-rubik max-w-540 mx-auto">Et harum quidem rerum facilis est et expedita distinctio. 
        Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.</p>
      </div>
      <BottomWhiteWavyCurve />
    </div>
  )
}
export { BlogSection }
