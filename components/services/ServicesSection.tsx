import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import React from 'react'
import ImageAndTitle from './ImageAndTile'

const SERVICES_INFO = [
  {
    title: "Wedding Catering",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
    img: "home/3-1024x683.jpg"
  },
  {
    title: "Wedding Gifts",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
    img: "home/4-1024x683.jpg",
    xFlip: true
  },
  {
    title: "Wedding Gifts",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.",
    img: "home/5-1024x681.jpg"
  }
]

const ServicesSection = () => {
  return (
    <div className="max-w-1170 mx-auto">
      {SERVICES_INFO.map(info => 
        <ImageAndTitle
          title={info.title}
          description={info.description}
          img={info.img}
          xFlip={info.xFlip}
        />)}
    </div>
  )
}
export { ServicesSection }