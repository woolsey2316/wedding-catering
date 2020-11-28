import Link from 'next/link'
import { HeadPost } from './HeadPost'

export const Post = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post

  return (
    <article>
      <HeadPost meta={meta} isBlogPost={true}/>
      <Link href={'/blog' + link}>
        <a>Read more →</a>
      </Link>
    </article>
  )
}