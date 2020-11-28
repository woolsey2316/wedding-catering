import React from 'react'

const BlockQuote: React.FC = (props) => {
  return (
    <>
      <h6 className="absolute font-playfair text-5xl text-coral rounded-full leading-tight">“</h6>
      <blockquote {...props} className="ml-8 mt-8 font-rubik text-gray-600 italic text-lg leading-loose"></blockquote>
    </>
  )
}
export { BlockQuote }