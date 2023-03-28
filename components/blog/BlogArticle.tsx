import React from 'react'
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import { Heading, Text, Strong, BlockQuote } from '../../components/markdown-components'
import { AlsoLikeSection } from '../AlsoLikeSection'
import { CategoryLinks } from '../CategoryLinks'
import { CommentForm } from '../CommentForm'
import { CommentBar } from '../home/CommentBar'
import { LeaveAComment } from '../LeaveAComment'
import { PreviousPost } from '../PreviousPost'

type Props = {
  children: MDXRemoteSerializeResult<Record<string, unknown>>
  data: any
}
export default function BlogArticle({children, data}:Props) {
  return (
    <div className="font-rubik leading-loose">
			<MDXRemote {...children} components={{
        h1: Heading.H1,
        h2: Heading.H2,
        strong: Strong,
        blockquote: BlockQuote,
        p: Text,
      }}></MDXRemote>
      <CategoryLinks categories={['Beauty', 'Planning', 'Wedding']}/>
      <CommentBar total={data.comments} likes={data.likes}/>
      <PreviousPost title="The Most Fabulous & Beautiful Floral Wedding Dresses to flaunt in 2019"/>
      <AlsoLikeSection/>
      <LeaveAComment/>
      <CommentForm/>
    </div>
  )
}