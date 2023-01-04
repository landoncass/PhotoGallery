import React from 'react'
import sample from './sample.json'
import { PhotoDetail } from './PhotoDetail'

// type CategoryListProps ={
//   name: string
//   {
//     title: string
//     description: string
//     photos: [
//       title: string

//     ]
//   }
// }

const categories = Object.entries(sample).map((category) => (
  <section className="CategorySection">
    <h2>
      <a href={`/${category[0]}`}>{category[1].title}</a>
    </h2>
    <>{category[1].description}</>
    <img id="CategoryListPhoto" src={category[1].photos[0].imageURL} />
  </section>
))

export function CategoryList() {
  return <div className="CategoryList">{categories}</div>
}
