import React from 'react'
import { BlogLink } from '../components'

interface Blog {
  image: string;
  title: string;
}

interface BlogList extends Array<Blog> { }

const bloglinks : BlogList = [
  {image: '1.jpg', title: 'Head to Toe Blueprints for Styling a Classic Themed Wedding'},
  {image: '2.jpg', title: 'The Most Fabulous &amp; Beautiful Floral Wedding Dresses To Flaunt in 2019'},
  {image: '3.jpg', title: 'How To Save Precious Wedding Happy Memories With Wedding Photos'},
  {image: '4.jpg', title: 'Up Your Floral Game With These Trending Wedding Flower Ideas'},
  {image: '5.jpg', title: 'Step into Spring with Jenny Yoo’s Flirty and Floral Spring 2019 Collection'}
]

function BlogLinkContainer() {
  return (
    <ul>
      { bloglinks.map((blog, index) => 
        <BlogLink
          key={index}
          image={blog.image}
          title={blog.title}
        />
      )}
    </ul>
  )
}

export {BlogLinkContainer}