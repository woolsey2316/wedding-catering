import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import React from 'react'
import { Footer } from '../../../components'
import BlogArticle from '../../../components/blog/BlogArticle'
import BlogImage from '../../../components/blog/BlogImage'
import { Categories } from '../../../components/Categories'
import KeepInTouch from '../../../components/KeepInTouch'
import { NewsletterSubscription } from '../../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../../containers/RecommendedBlogs'
import { MobileHeadPost } from '../../../components/MobileHeadPost'
import { postFilePaths, POSTS_PATH } from '../../../utils/mdxUtils'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { BlogPostMetaData } from '../../../types/BlogPostMetaData'

type Props = {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  frontMatter: BlogPostMetaData
}
/*
  Blog post page

*/
export default function PostPage({ source, frontMatter }:Props) {
  console.log(frontMatter)
  return (
    <>
      <div className="pt-10 px-2 max-w-1170 mx-auto">
        <BlogImage meta={frontMatter}/>
        <div className="xl:flex py-8 gap-8">
          <div className="col-span-12 md:col-span-8">
            <MobileHeadPost meta={frontMatter} />
            <BlogArticle data={frontMatter}>
              {source}
            </BlogArticle>
          </div>
          <div className="col-span-12 md:col-span-4">
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

// If you export a function called getStaticProps (Static Site Generation) 
// from a page, Next.js will pre-render this page at build time using the 
// props returned by getStaticProps.
export const getStaticProps = async ({ params }) => {
  const postFilePath = path.join(POSTS_PATH, `${params.postId}.mdx`)
  const source = fs.readFileSync(postFilePath)

  const { content, data } = matter(source)

  const mdxSource = await serialize(content, {
    // Optionally pass remark/rehype plugins
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
    },
    scope: data,
  })

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  }
}

// If a page has Dynamic Routes and uses getStaticProps, it 
// needs to define a list of paths to be statically generated.
export const getStaticPaths = async () => {
  const paths = postFilePaths
    // Remove file extensions for page paths
    .map((path) => path.replace(/\.mdx?$/, ''))
    // Map the path into the static paths object required by Next.js
    .map((postId) => ({ params: { postId } }))

  return {
    paths,
    fallback: false,
  }
}