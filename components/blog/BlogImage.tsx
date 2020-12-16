import React from 'react'
import { HeadPost } from '../HeadPost'

interface MetaInfo {
  title: string
  image: string
  category: string
  author: string
  description: string
  date: string
  readTime: number
}

interface BlogImageProps {
  meta: MetaInfo
}

export default function BlogImage({ meta } : BlogImageProps) {
  return (
    <div className="h-84 lg:h-screen w-full flex flex-col items-center justify-end" 
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 65%,rgba(0,0,0,0.75)),url('${meta?.image}')`, 
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
        }}>
      <HeadPost meta={meta} />
    </div>
  )
}
