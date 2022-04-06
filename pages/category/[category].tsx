import { Footer } from '../../components'
import { Categories } from '../../components/Categories'
import KeepInTouch from '../../components/KeepInTouch'
import { NewsletterSubscription } from '../../components/NewsletterSubscription'
import { RecommendedBlogs } from '../../containers/RecommendedBlogs'
import { DetailedBlogLinkThumbnail } from '../../components/blog/DetailedBlogLinkThumbnail'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { POSTS_PATH } from '../../utils/mdxUtils'
import { loadGetInitialProps } from 'next/dist/next-server/lib/utils'

interface BlogData {
  link: string;
  image: string;
  title: string;
  date?: string;
  index?: number;
  category: string;
  author: string
}

export default function Layout({ CATEGORY, BLOG_LINKS }) {
  return (
    <>
      <div className="pt-10 px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 py-8 gap-8">
          <div className="lg:col-span-8 justify-center">
            <div className="flex text-center">
              <h4 className="font-nunito text-gray-900 text-2xl uppercase">Category:</h4>
              <h4 className="font-nunito text-coral text-2xl uppercase">{CATEGORY}</h4>
            </div>
            {BLOG_LINKS.map((blog: BlogData, index: number) => <DetailedBlogLinkThumbnail key={index} blog={blog}/>)}
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

async function findBlogPostsByCategory(category: string, PATH: string): Promise<BlogData[]> {
  const dir = await fs.promises.opendir(PATH)
  let categories: BlogData[] = []
  for await (const dirent of dir) {
    const postFilePath = path.join(POSTS_PATH, dirent.name)
    const source = fs.readFileSync(postFilePath)
    const { data } = matter(source)
    if (category.toLowerCase() === data.category.toLowerCase()) {
      categories.push(data as BlogData)
    }
  }

  return categories
}

export const getStaticProps = async ({ params }) => {
  const BLOG_LINKS = await findBlogPostsByCategory(params.category, POSTS_PATH);
  // directory name === blog category eg photos, beauty, planning
  return { props: {
    CATEGORY: params.category,
    BLOG_LINKS: BLOG_LINKS
  }}
}

export async function getStaticPaths() {
  return {
    paths: [
      {  params: { category: 'photos' } },
      {  params: { category: 'planning' } },
      {  params: { category: 'beauty' } },
    ],
    fallback: false
  }
}
