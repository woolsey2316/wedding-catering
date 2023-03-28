import React from 'react'
import LightGrayWavyCurve from '../wavy-curve/LightGrayWavyCurve'
import AboutUsDescription from './AboutUsDescription'
import ImageWithText from './ImageWithText'

const websiteInfo = [
  {
    heading: "Our Story",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati.",
    img: "about us/g2-1024x683.jpg"
  }, {
    heading: "Our Core Values",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos.",
    img: "about us/1-1024x682.jpg"
  }
]
/*
  Website section that belongs to /aboutus
*/
const AboutUsSection = () => {
  return (
    <>
      <AboutUsDescription />
      <LightGrayWavyCurve yOffset="-19px" />
      <div className="lg:grid lg:grid-cols-2 lg:col-gap-8 md:px-4 lg:mt-20 max-w-1170 mx-auto">
        {websiteInfo.map(info=> 
          <ImageWithText heading={info.heading} description={info.description} img={info.img}></ImageWithText>
        )}
      </div>
    </>
  )
}
export { AboutUsSection }