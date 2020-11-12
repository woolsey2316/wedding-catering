import React from 'react'
import { Footer } from '../../components'
import BlogArticle from '../../components/blog/BlogArticle'
import BlogImage from '../../components/blog/BlogImage'
import { Categories } from '../../components/Categories'
import KeepInTouch from '../../components/KeepInTouch'
import { NewsletterSubscription } from '../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'

export default function blog1() {
  return (
    <div className="pt-10 px-4">
      <BlogImage image="/our blog/4-585x390.jpg"/>
      <div className="flex py-8 gap-8">
        <div className="col-span-8">
          <BlogArticle/>
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
      <Footer/>
    </div>
  )
}