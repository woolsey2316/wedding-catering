import React from 'react'

const Text: React.FC = (props) => {
  return (
   <p {...props} className="mb-3 font-rubik text-gray-800 leading-normal"></p>
  )
}
export { Text }