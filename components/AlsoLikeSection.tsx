import React from 'react'
import { BlogLinkThumbnail } from '.'

interface Blog {
  image: string;
  link: string;
  title: string;
}

interface BlogList extends Array<Blog> { }

/*
  Thumbnail list of similar blog posts to the one currently viewed
*/
export const AlsoLikeSection = () => {
  const bloglinks : BlogList = [
    {image: '1.jpg', link: '/blog/post-1', title: 'Head to Toe Blueprints for Styling a Classic Themed Wedding'},
    {image: '2.jpg', link: '/blog/post-2', title: 'The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019'},
    {image: '3.jpg', link: '/blog/post-3', title: 'How To Save Precious Wedding Happy Memories With Wedding Photos'},
  ]
  return (
    <div className="pt-8 pb-12 border-b border-gray-300">
      <div className="flex item-center justify-center">
        <div className="border-t border-coral w-24 mt-5"/>
        <p className="font-nunito text-xl uppercase mx-2">You May Also Like</p>
        <div className="border-t border-coral w-24 mt-5"/>
      </div>
      <div className="grid grid-cols-3 col-gap-5">
        {bloglinks.map((blog, index) => 
          <BlogLinkThumbnail 
            key={index}
            image={blog.image}
            link={blog.link}
            title={blog.title}
            date="June 23, 2019"
            />
          )}
      </div>
    </div>
  )
}