import React from 'react'
import { BlogPostMetaData } from '../../types/BlogPostMetaData'
import { HeadPost } from '../HeadPost'
type Props = {
  meta: BlogPostMetaData
}
export default function BlogImage({ meta } : Props) {
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
