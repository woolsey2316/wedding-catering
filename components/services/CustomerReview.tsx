import React from 'react'
import Rating from '../Rating';
interface Props {
  review: string;
  name: string;
  img: string;
}
function CustomerReview({review, name, img}: Props) {
  return (
    <>
      <p className="font-playfair text-5xl text-white rounded-full border-2 w-12 h-12 leading-tight my-8 mx-auto">“</p>
      <p className="font-playfair text-white text-xl italic max-w-540 md:max-w-740">
        {review}
      </p>
      <Rating/>
      <div className="w-16 h-16 rounded-full overflow-hidden shadow-inner mt-8">
        <img src={img}></img>  
      </div>
      <p className="text-white font-nunito text-lg font-bold mt-3">{name}</p>
    </>
   );
}

export default CustomerReview;