import React from 'react'
interface Props {
  heading: string;
  description: string;
  img: string;
}
function ImageWithText({heading, description, img}: Props) {
  return (
    <div className="w-full lg:relative mr-8 mb-56 lg:mb-0">
      <img className="w-full" src={img}/>
      <div className="no-scroll-bar absolute bg-white -mt-16 shadow-lg mx-8 p-8 text-center h-72 overflow-y-auto">
        <h1 className="font-parisienne text-h2 font-semibold">{heading}</h1>
        <p className="font-rubik text-gray-700">{description}</p>
      </div>
    </div>
    );
}

export default ImageWithText;