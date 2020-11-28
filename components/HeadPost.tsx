import React from 'react'

interface MetaInfo {
  title: string
  category: string
  author: string
  description: string
  date: string
}

interface HeadPostProps {
  meta: MetaInfo
  isBlogPost: boolean
}
export const HeadPost = ({ meta, isBlogPost } : HeadPostProps) => (
  <div className="hidden lg:block text-center">
    <p className="text-white font-rubik text-sm mb-2">{meta.category}</p>
    <h3 className="font-nunito text-white font-semibold text-h4">
      {meta.title}
    </h3>
    <div className="flex items-center justify-center mb-4">  
      <p className="text-white font-rubik text-sm">by {meta.author}</p>
      <p className="text-white text-xs pb-1 mx-4">|</p>
      <p className="text-white font-rubik text-sm">{meta.date}</p>
    </div>
  </div>
)
