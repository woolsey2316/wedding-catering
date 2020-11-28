import { MDXProvider } from '@mdx-js/react'
import Image from 'next/image'
import { Heading, Text, Strong, BlockQuote} from '../../components/markdown-components'
import { Footer } from '../../components'
import { Categories } from '../../components/Categories'
import KeepInTouch from '../../components/KeepInTouch'
import { NewsletterSubscription } from '../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'
import { DetailedBlogLinkThumbnail } from '../../components/blog/DetailedBlogLinkThumbnail'

interface Blog {
  image: string;
  link: string;
  title: string;
  author: string;
  date: string;
  category: string;
}

interface BlogList extends Array<Blog> { }

interface Meta {
  name: string
  bloglinks: BlogList
}

interface LayoutProps {
  children: string
  meta: Meta
}

export default function Layout({ children, meta } : LayoutProps) {
  return (
    <MDXProvider components={{
      img: Image,
      h1: Heading.H1,
      h2: Heading.H2,
      strong: Strong,
      blockquote: BlockQuote,
      p: Text,
    }}>
      <div className="pt-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-8 gap-8">
          <div className="lg:col-span-8 justify-center">
            <div className="flex text-center">
              <h4 className="font-nunito text-gray-900 text-2xl uppercase">Category:</h4>
              <h4 className="font-nunito text-coral text-2xl uppercase">{meta.name}</h4>
            </div>
            {meta.bloglinks.map((blog: Blog, index: number) => <DetailedBlogLinkThumbnail key={index} blog={blog}/>)}
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
    </MDXProvider>
  )
}