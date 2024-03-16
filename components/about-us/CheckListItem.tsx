
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

import {
  IconProp,
} from '@fortawesome/fontawesome-svg-core'

interface Props {
  icon: IconDefinition;
  heading: string;
  description: string;
}
function CheckListItem({icon, heading, description}:Props) {
  return (
    <div className="col-span-4 flex">
      <div className="flex flex-col justify-center flex-shrink-0 items-center rounded-full min-w-16 min-h-16 w-16 h-16 bg-coral border-1 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
        <FontAwesomeIcon className="text-3xl text-white" icon={icon as IconProp}></FontAwesomeIcon>
      </div>
      <div className="p-5 flex-1">
        <h1 className="font-nunito text-2xl font-bold mb-2">{heading}</h1>
        <p className="font-rubik text-gray-700">
          {description}
        </p>
      </div>
    </div>
   );
}

export default CheckListItem;