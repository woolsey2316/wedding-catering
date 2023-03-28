import React from 'react'
import { Footer } from '../components'
import { OurServices,
  ServicesSection,
  ReviewSection,
  ContactSection,
  Menu
} from '../components/services'

const MENU_TYPES = [
  {
    menuType: "Seasonal Menu",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.",
    img:"home/6-1024x1024.jpg"
  }, {
    menuType: "Daily Menu",
    description: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil.",
    img:"services/g1e-ojs6tq3cg4k059k15pjk204bm87b2ypqcove6tleds.jpg",
    xFlip: true
  }
]
export default function Services() {
  return (
    <>
      <OurServices/>
      <ServicesSection/>
      <ReviewSection/>
      {MENU_TYPES.map((info, index) => 
        <Menu 
          key={index}
          menuType={info.menuType} 
          description={info.description} 
          img={info.img}
          xFlip={info.xFlip} />
        )}
      <ContactSection/>
      <Footer/>
    </>
  )
}