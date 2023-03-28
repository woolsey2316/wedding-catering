import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

interface Props {
  title: string;
  description: string;
  img: string;
  xFlip?: boolean;
}
function ImageAndTitle({title, description, img, xFlip = false}: Props) {
  return (
    <div className={`lg:flex ${xFlip ? 'lg:flex-row-reverse' : ''} items-center xl:items-stretch first:mt-20`}>
      <img className="mx-auto lg:w-1/2" src={img}/>
      <div className="max-w-585 p-10 bg-gray-100 lg:flex lg:flex-col lg:justify-center lg:items-start">
        <h1 className="font-parisienne font-semibold text-h2">{title}</h1>
        <p className="font-rubik text-gray-700 mb-10">{description}
        </p>
        <a className="cursor-pointer py-3 px-8 rounded-full font-rubik text-sm font-medium bg-coral text-white hover:text-coral hover:bg-white transition-all duration-500 ease-in-out">
          Call Us Now
          <FontAwesomeIcon className="text-sm ml-2" icon={faLongArrowAltRight}/>
        </a>
      </div>
    </div>
   );
}

export default ImageAndTitle;