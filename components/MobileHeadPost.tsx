import { BlogPostMetaData } from "../types/BlogPostMetaData"

interface MobileHeadPostProps {
  meta: BlogPostMetaData
}
export const MobileHeadPost = ({ meta } : MobileHeadPostProps) => (
  <div className="lg:hidden text-center">
    <p className="text-coral font-rubik text-sm mb-2">{meta?.category}</p>
    <h3 className="font-nunito font-semibold text-h4">{meta?.title}</h3>
    <div className="flex items-center justify-center mb-4">  
      <p className="font-rubik text-sm">by {meta?.author}</p>
      <p className="text-xs pb-1 mx-4">|</p>
      <p className="font-rubik text-gray-500 text-sm">{meta?.date}</p>
    </div>
  </div>
)