import React from 'react'
import { SideNav, OurServices, ServicesSection2, ReviewSection2 } from '../components'

export default function Services() {
  return (
    <div className="flex flex-col justify-center">
      <div className="flex">
        <SideNav/>
        <div className="w-full">
          <OurServices/>
          <ServicesSection2/>
          <ReviewSection2/>
        </div>
      </div>
    </div>
  )
}