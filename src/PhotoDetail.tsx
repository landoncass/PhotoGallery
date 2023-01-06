import React from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import sample from './sample.json'

export function PhotoDetail() {
  const params = useParams<{
    categories: 'pandas' | 'miniatures'
    photoIndex: string
  }>()

  return (
    <div>
      <h1>
        {sample[params.categories!].photos[Number(params.photoIndex)].title}
      </h1>
      <img
        src={
          sample[params.categories!].photos[Number(params.photoIndex)].imageURL
        }
        width="100%"
      />
      <p>
        <a
          href={
            sample[params.categories!].photos[Number(params.photoIndex)]
              .sourceURL
          }
        >
          Source
        </a>
      </p>
    </div>
  )
}
