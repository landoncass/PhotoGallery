import React from 'react'
import { CategoryList } from './CategoryList'
import { PhotoList } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'
import sample from './sample.json'

export function Pandas() {
  const text = 'pandas'
  return (
    <div>
      <PhotoList category={text} />
    </div>
  )
}
