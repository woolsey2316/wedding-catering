import { MDXProvider } from '@mdx-js/react'
import { Heading, Text, Strong, BlockQuote} from '../../components/markdown-components'
import React from 'react'
import { Footer } from '../../components'
import BlogArticle from '../../components/blog/BlogArticle'
import BlogImage from '../../components/blog/BlogImage'
import { Categories } from '../../components/Categories'
import KeepInTouch from '../../components/KeepInTouch'
import { NewsletterSubscription } from '../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'
import { MobileHeadPost } from '../../components/MobileHeadPost'

export default function Layout({ children, meta }) {
  return (
    <MDXProvider components={{
      h1: Heading.H1,
      h2: Heading.H2,
      strong: Strong,
      blockquote: BlockQuote,
      p: Text,
    }}>
      <div className="pt-10 px-2">
        <BlogImage meta={meta}/>
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
    </MDXProvider>
  )
}