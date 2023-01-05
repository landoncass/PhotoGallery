import React from 'react'
import sample from './sample.json'
import { PhotoDetail } from './PhotoDetail'
import { Link } from 'react-router-dom'

const categories = Object.entries(sample).map((category) => (
  <section className="CategorySection">
    <h2>
      <Link to={`/${category[0]}`}>{category[1].title}</Link>
    </h2>
    <>{category[1].description}</>
    <img id="CategoryListPhoto" src={category[1].photos[0].imageURL} />
  </section>
))

export function CategoryList() {
  return <div className="CategoryList">{categories}</div>
}
