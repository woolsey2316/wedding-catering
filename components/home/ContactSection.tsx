import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faKey,
  faPhoneAlt,

} from '@fortawesome/free-solid-svg-icons'
import BottomLightGrayWavyCurve from '../wavy-curve/BottomLightGrayWavyCurve'
import ContactInfo from './ContactInfo'
const CONTACT_DETAILS = [
  {
    contactType: "Office Location",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon: faKey
  },
  {
    contactType: "Email Address",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon: faEnvelope
  },
  {
    contactType: "Phone Number",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem.",
    icon: faPhoneAlt
  }
]
function ContactSection() {
  return (
    <>
      <BottomLightGrayWavyCurve />
      <div className="lg:flex bg-gray-100 py-10 px-4">
      {CONTACT_DETAILS.map(info => 
        <ContactInfo contactType={info.contactType} description={info.description} icon={info.icon}/>
      )}
      </div>
    </>
  )
}
export { ContactSection }