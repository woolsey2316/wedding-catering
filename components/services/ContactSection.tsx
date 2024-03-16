import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faKey,
  faPhoneAlt,
  faPaperPlane

} from '@fortawesome/free-solid-svg-icons'
import WhiteWavyCurve from '../wavy-curve/WhiteWavyCurve'
import KeyPoint from './KeyPoint'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
const KEY_POINTS = [
  {
    title: "Office Location",
    description: "Sed ut perspiciatis unde omnis iste natus error  sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon:faKey

  },
  {
    title: "Email Address",
    description: "Sed ut perspiciatis unde omnis iste natus error  sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon:faEnvelope as IconProp
  },
  {
    title: "Phone Number",
    description: "Sed ut perspiciatis unde omnis iste natus error  sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon:faPhoneAlt as IconProp
  },
  {
    title: "Social Connect",
    description: "Sed ut perspiciatis unde omnis iste natus error  sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon:faPaperPlane as IconProp
  }
]
const ContactSection = () => {
  return (
    <div className="bg-gray-100">
      <WhiteWavyCurve/>
      <div className="lg:grid lg:grid-cols-12 py-10 px-4 mx-auto max-w-1170">
        {KEY_POINTS.map((info,index) => <div key={index} className="col-span-6 flex">
          <KeyPoint title={info.title} description={info.description} icon={info.icon as IconProp} />
        </div>
        )}
      </div>
    </div>
  )
}
export { ContactSection }