import React, { useState } from 'react'
import { CategoryList } from './CategoryList'
import { PhotoDetail } from './PhotoDetail'
import sample from './sample.json'
import { Link, useParams } from 'react-router-dom'

// const [photoListCategory, setPhotoListCategory] = useState({
//   id: undefined,
// })

export function PhotoListPage() {
  const params = useParams<{ id: string }>()

  const pictures = Object.entries(sample).map((category) => (
    <section className="PhotoListSection">
      <h2>{category[1].title}</h2>
      <p>{category[1].description}</p>
      <img id="CategoryListPhoto" src={category[1].photos[0].imageURL} />
    </section>
  ))
  return <p>{pictures}</p>
}
