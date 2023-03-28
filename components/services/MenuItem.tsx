import React from 'react'
interface Props {
  food: string;
  price: string;
}
function MenuItem({food, price}:Props) {
  return (
    <li className="flex">
      <p className=" font-rubik font-semibold text-gray-700 text-lg mb-5">{food}</p>
      <div className="flex-1 border-t border-dotted border-gray-700 w-full mt-5 ml-5 mr-2"></div>
      <p className="font-semibold text-coral text-xl font-rubik">{price}</p>
    </li>
   );
}

export default MenuItem;