import React from 'react'
import { CategoryLink } from './CategoryLink'

export interface Props {
  categories: Array<string>
}

export function CategoryLinks({categories} : Props) {
  return (
    <div className="flex mt-12">
      {categories.map((elem, index) => <CategoryLink key={index} title={elem}/>)}
    </div>
  )
}