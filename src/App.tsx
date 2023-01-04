import React from 'react'
import { CategoryList } from './CategoryList'
import { PhotoList } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'
import sample from './sample.json'
import { Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <div className="Landing">
      <h1>Things I like</h1>
      <h2>A photo gallery by Landon Cassman</h2>
      <main>
        <Routes>
          <Route path="/" element={<CategoryList />}></Route>
          <Route path="*" element={<p>Oops, that URL is unknown</p>}></Route>
        </Routes>
      </main>
    </div>
  )
}
