import React from 'react'

interface BlogImageProps {
  image: string
}
export default function BlogImage({image} : BlogImageProps) {
  return (
    <div className="h-screen w-full flex flex-col items-center justify-end" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 65%,rgba(0,0,0,0.75)),url('${image}')`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
      <p className="text-white font-rubik text-sm mb-2">Planning</p>
      <h3 className="font-nunito text-white font-semibold text-h4">Head to Toe Blueprints for Styling a Classic Themed Wedding</h3>
      <div className="flex items-center mb-4">  
        <p className="text-white font-rubik text-sm">by Penci Design</p>
        <p className="text-white text-xs pb-1 mx-4">|</p>
        <p className="text-white font-rubik text-sm">June 23, 2019</p>
      </div>
    </div>
  )
}
