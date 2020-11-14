import React from 'react'
import { Footer } from '../../components'
import { DetailedBlogLinkThumbnail } from '../../components/blog/DetailedBlogLinkThumbnail'
import { Categories } from '../../components/Categories'
import KeepInTouch from '../../components/KeepInTouch'
import { NewsletterSubscription } from '../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'

interface Blog {
  image: string;
  link: string;
  title: string;
  author: string;
  date: string;
  category: string;
}

interface BlogList extends Array<Blog> { }

const bloglinks : BlogList = [
  {author: 'Penci Design', date: 'June 23, 2019', category: 'Beauty', image: '1.jpg', link: '/blog/blog1', title: 'Head to Toe Blueprints for Styling a Classic Themed Wedding'},
  {author: 'Penci Design', date: 'June 23, 2019', category: 'Beauty', image: '2.jpg', link: '/blog/blog2', title: 'The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019'},
  {author: 'Penci Design', date: 'June 23, 2019', category: 'Beauty', image: '3.jpg', link: '/blog/blog3', title: 'How To Save Precious Wedding Happy Memories With Wedding Photos'},
  {author: 'Penci Design', date: 'June 23, 2019', category: 'Beauty', image: '4.jpg', link: '/blog/blog4', title: 'Up Your Floral Game With These Trending Wedding Flower Ideas'},
  {author: 'Penci Design', date: 'June 23, 2019', category: 'Beauty', image: '5.jpg', link: '/blog/blog5', title: 'Step into Spring with Jenny Yoo’s Flirty and Floral Spring 2019 Collection'}
]

export default function Beauty() {
  return (
    <>
      <div className="pt-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 py-8 gap-8">
          <div className="lg:col-span-8 justify-center">
            <div className="flex text-center">
              <h4 className="font-nunito text-gray-900 text-2xl uppercase">Category:</h4>
              <h4 className="font-nunito text-coral text-2xl uppercase">Beauty</h4>
            </div>
            {bloglinks.map((blog, index) => <DetailedBlogLinkThumbnail key={index} blog={blog}/>)}
          </div>
          <div className="lg:col-span-4">
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