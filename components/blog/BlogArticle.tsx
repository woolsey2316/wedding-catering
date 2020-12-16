import React from 'react'
import { AlsoLikeSection } from '../AlsoLikeSection'
import { CategoryLinks } from '../CategoryLinks'
import { CommentForm } from '../CommentForm'
import { CommentSection } from '../home/CommentSection'
import { LeaveAComment } from '../LeaveAComment'
import { PreviousPost } from '../PreviousPost'

export default function BlogArticle({children}) {
  return (
    <div className="font-rubik leading-loose">
			<article>
        {children}
      </article>
      <CategoryLinks categories={['Beauty', 'Planning', 'Wedding']}/>
      <CommentSection total={4} likes={4}/>
      <PreviousPost title="The Most Fabulous & Beautiful Floral Wedding Dresses to flaunt in 2019"/>
      <AlsoLikeSection/>
      <LeaveAComment/>
      <CommentForm/>
    </div>
  )
}