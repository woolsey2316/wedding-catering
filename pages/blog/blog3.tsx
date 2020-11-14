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
    <>
      <div className="pt-10 px-2">
        <BlogImage image="/our blog/3-585x390.jpg"/>
        <div className="md:flex py-8 gap-8">
          <div className="col-span-8">
            <div className="lg:hidden text-center">
              <p className="text-coral font-rubik text-sm mb-2">Planning</p>
              <h3 className="font-nunito font-semibold text-h4">Head to Toe Blueprints for Styling a Classic Themed Wedding</h3>
              <div className="flex items-center justify-center mb-4">  
                <p className="font-rubik text-sm">by Penci Design</p>
                <p className="text-xs pb-1 mx-4">|</p>
                <p className="font-rubik text-gray-500 text-sm">June 23, 2019</p>
              </div>
            </div>
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
      </div>
      <Footer/>
    </>
  )
}