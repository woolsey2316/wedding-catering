import React from 'react'
import { BlogLinkThumbnail, BlogLinkMainThumbnail } from '../components'

interface Blog {
  image: string;
  link: string;
  title: string;
}

interface BlogList extends Array<Blog> { }

const bloglinks : BlogList = [
  {image: '1.jpg', link: '/blog/post-1', title: 'Head to Toe Blueprints for Styling a Classic Themed Wedding'},
  {image: '2.jpg', link: '/blog/post-2', title: 'The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019'},
  {image: '3.jpg', link: '/blog/post-3', title: 'How To Save Precious Wedding Happy Memories With Wedding Photos'},
  {image: '4.jpg', link: '/blog/post-4', title: 'Up Your Floral Game With These Trending Wedding Flower Ideas'},
  {image: '5.jpg', link: '/blog/post-5', title: 'Step into Spring with Jenny Yoo’s Flirty and Floral Spring 2019 Collection'}
]

function RecommendedBlogs() {
  return (
    <ul className="grid grid-cols-2 col-gap-5 mb-12">
      <div className="col-span-2">
        <h4 className="font-nunito font-bold text-gray-800 uppercase border-b border-gray-800 pb-2">Recommended Blog Posts</h4>
        <div className="absolute pt-px -mt-2px bg-coral border-1 border border-coral w-10 mb-5 h-1px"></div>
        <BlogLinkMainThumbnail
          key={0}
          image={bloglinks[0].image}
          link={bloglinks[0].link}
          title={bloglinks[0].title}
        />
      </div>
      { bloglinks.map((blog, index) => 
        index > 0 &&
        <BlogLinkThumbnail
          key={index}
          image={blog.image}
          link={blog.link}
          title={blog.title}
        />
      )}
    </ul>
  )
}

export {RecommendedBlogs}