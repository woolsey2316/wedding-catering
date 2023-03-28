import React from 'react'
import LightGrayWavyCurve from '../wavy-curve/LightGrayWavyCurve'

const OurServices = () => {
  return (
    <>
      <div className="bg-gray-100 p-16 text-center">
        <h1 className="font-parisienne text-5xl font-semibold">Our Services</h1>
        <p className="font-rubik text-gray-700 max-w-540 mx-auto"> Et harum quidem rerum facilis est et expedita distinctio. 
          Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.
        </p>
      </div>
      <LightGrayWavyCurve yOffset='-14px'/>
    </>
  )
}
export { OurServices }