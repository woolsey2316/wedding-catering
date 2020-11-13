import React from 'react'
import { AlsoLikeSection } from '../AlsoLikeSection'
import { CategoryLinks } from '../CategoryLinks'
import { CommentForm } from '../CommentForm'
import { CommentSection } from '../CommentSection'
import { LeaveAComment } from '../LeaveAComment'
import { PreviousPost } from '../PreviousPost'

export default function BlogArticle() {
  return (
    <div className="font-rubik text-gray-900 text-sm leading-loose">
			<p className="mb-3">Lommodo ligula eget dolor. Aenean massa. Cum sociis que penatibus et magnis dis parturient montes lorem, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla onsequat massa quis enim. Donec pede justo fringilla vel aliquet nec vulputate eget. Lorem ispum dolore siamet ipsum dolor.</p>
      <p className="mb-3">Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumquer nihil impedit quo minus id quod maxime placeat facere.<br/>
      </p>
      <p className="mb-3 mx-auto text-lg"><strong className="w-full">BE THE CHANGE YOU WANT TO SEE IN THE WORLD</strong></p>
      <p className="mb-3">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.&nbsp;Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur&nbsp;reprehenderit qui in ea voluptate velit esse quam nihil.</p>
        <p className="absolute inline-block font-playfair text-5xl text-coral rounded-full leading-tight">“</p>
        <p className="inline-block mb-3 text-gray-600 text-base italic ml-8 mt-2">
          You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.
        </p>
      <p className="mb-3">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.&nbsp;Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.</p>
      <h2 className="text-h4 mb-4">Demo Magazine Article Title</h2>
      <p className="mb-3">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit.&nbsp;Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
      <p className="mb-3">Rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer cidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
      <CategoryLinks categories={['Beauty', 'Planning', 'Wedding']}/>
      <CommentSection total={4} likes={4}/>
      <PreviousPost title="The Most Fabulous & Beautiful Floral Wedding Dresses to flaunt in 2019"/>
      <AlsoLikeSection/>
      <LeaveAComment/>
      <CommentForm/>
    </div>
  )
}