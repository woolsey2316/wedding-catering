import React from 'react'
import { Footer } from '..'
import BlogArticle from '../blog/post-Article'
import BlogImage from '../blog/post-Image'
import { Categories } from '../Categories'
import KeepInTouch from '../KeepInTouch'
import { NewsletterSubscription } from '../NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'
import { MobileHeadPost } from '../MobileHeadPost'

export default function Blog1({ children, meta}) {
  return (
    <>
      <div className="pt-10 px-2">
        <BlogImage meta={meta} image="/our blog/1-2-585x390.jpg"/>
        <div className="md:flex py-8 gap-8">
          <div className="col-span-8">
            <MobileHeadPost meta={meta} isBlogPost />
            <BlogArticle>
              {children}
            </BlogArticle>
          </div>
          <div className="col-span-4">
            <div className="mb-5 overflow-y-auto">
              <KeepInTouch/>
              <RecommendedBlogs/>
              <NewsletterSubscription/>
              <Categories/>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}