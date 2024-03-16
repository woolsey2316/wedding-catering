import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconProp;
  contactType: string;
  description: string;
}
function ContactInfo({icon, contactType, description}: Props) {
  return (
    <div className="flex">
      <div className="flex flex-col justify-center items-center rounded-full text-2xl w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
        <FontAwesomeIcon className="text-white" icon={icon as IconProp}></FontAwesomeIcon>
      </div>
      <div className="p-5 flex-1">
        <h1 className="font-nunito text-2xl font-bold mb-2">{contactType}</h1>
        <p className="font-rubik text-gray-700">
          {description}
        </p>
      </div>
    </div>
   );
}

export default ContactInfo;