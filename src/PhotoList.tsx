import React, { useEffect, useState } from 'react'
import { CategoryList } from './CategoryList'
import { PhotoDetail } from './PhotoDetail'
import sample from './sample.json'
import { Link, useParams } from 'react-router-dom'
import { PhotoListItemType } from './App'

export function PhotoListPage() {
  const params = useParams<{
    categories: 'pandas' | 'miniatures'
    photoIndex: string
  }>()

  return (
    <div>
      <h2>{sample[params.categories!].title}</h2>
      <p>{sample[params.categories!].description}</p>
      <div>
        {sample[params.categories!].photos.map((photo, index) => {
          return (
            <Link to={`./${index}`} key={index}>
              <div>
                <img src={photo.imageURL} width="100%" key={index} />
                {photo.title}
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
