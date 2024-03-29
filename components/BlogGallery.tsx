import React from 'react'
import { BlogTile } from './BlogTile'

/* Blog gallery*/
const BlogGallery = () => {
  const blogInfo = [{
    link:"blog/post-1",
    title:"Head to Toe Blueprints for Styling a Classic Themed Wedding",
    src:"our blog/1-2-585x390.jpg",
    category:"Planning",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis … "
  },{
    link:"blog/post-2",
    title:"The Most Fabulous & Beautiful Floral Wedding Dresses To Flaunt in 2019",
    src:"our blog/2-585x390.jpg",
    category:"Beauty",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis …"
  },{
    link:"blog/post-3",
    title:"How To Save Precious Wedding Happy Memories With Wedding Photos",
    src:"our blog/3-585x390.jpg",
    category:"Photos",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis … "
  },{
    link:"blog/post-4",
    title:"Up Your Floral Game With These Trending Wedding Flower Ideas",
    src:"our blog/4-585x390.jpg",
    category:"Planning",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis …"
  }, {
    link:"blog/post-5",
    title:"Step into Spring with Jenny Yoo’s Flirty and Floral Spring 2019 Collection",
    src:"our blog/6-585x390.jpg",
    category:"Beauty",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis …"
  }, {
    link:"blog/post-2",
    title:"Unforgettable Memories & Happy Moments In These Beautiful Photos",
    src:"our blog/7-585x390.jpg",
    category:"Photos",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis …"
  }, {
    link:"blog/post-2",
    title:"The Most Helpful Features to Add to Your Wedding Website, According To Us",
    src:"our blog/8-585x390.jpg",
    category:"Planning",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis … "
  }, {
    link:"blog/post-2",
    title:"This Collection Was Made for the Carefree Bride with a Boho Heart",
    src:"our blog/11-585x390.jpg",
    category:"Beauty",
    author:"Penci Design",
    date:"June 23, 2019",
    preview:"Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis … "
  }]
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-1170 mx-auto pl-4 mb-20">
      {
        blogInfo.map(blogpost => <BlogTile 
          link={blogpost.link}
          title={blogpost.title}
          src={blogpost.src}
          category={blogpost.category}
          author={blogpost.author}
          date={blogpost.date}
          preview={blogpost.preview}
        />
      )}
    </div>
  )
}
export {BlogGallery}