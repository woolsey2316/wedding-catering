import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
interface Props {
  icon: IconDefinition,
  title: string;
  description: string
}
function KeyPoint({icon, title, description}:Props) {
  return (
    <>
      <div className="flex flex-col justify-center items-center rounded-full w-16 h-16 bg-coral border-0 border-coral hover:border-2 transition-all duration 350 ease-in-out mt-5">
        <FontAwesomeIcon className="fa-lg text-white" icon={icon}></FontAwesomeIcon>
      </div>
      <div className="p-5 flex-1">
        <h1 className="font-nunito text-2xl font-bold mb-2">{title}</h1>
        <p className="font-rubik text-gray-700">
        {description}
        </p>
      </div>
    </>
   );
}

export default KeyPoint;