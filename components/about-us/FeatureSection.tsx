import React from 'react'

import {
  faCheck,
  faLeaf,
  faUsers,
  faThumbsUp,
  faList

} from '@fortawesome/free-solid-svg-icons'

import {
  faCalendarMinus

} from '@fortawesome/free-solid-svg-icons'
import CheckListItem from './CheckListItem'
const FEATURE_INFO = [
  {
    icon:faCheck,
    heading: "10 Years Experience",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  },
  {
    icon:faLeaf,
    heading: "Wedding Specialisation",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  },
  {
    icon:faUsers,
    heading: "Professional Staffs",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  },
  {
    icon:faList,
    heading: "Tasty Menu",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  },
  {
    icon:faThumbsUp,
    heading: "Safe Ingredients",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  },
  {
    icon:faCalendarMinus,
    heading: "24 Hour Services",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor emque laudantium, totam rem."
  }
]

function FeatureSection() {
  return (
      <div className="lg:grid lg:grid-cols-12 py-10 px-4 mt-48 max-w-1170 mx-auto">
        {FEATURE_INFO.map(info => <CheckListItem icon={info.icon} heading={info.heading} description={info.description} />)}
      </div>
  )
}
export { FeatureSection }