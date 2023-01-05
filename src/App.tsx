import React from 'react'
import { CategoryList } from './CategoryList'
import { PhotoListPage } from './PhotoList'
import { PhotoDetail } from './PhotoDetail'
import sample from './sample.json'
import { Routes, Route, Link } from 'react-router-dom'

export function App() {
  return (
    <div className="Landing">
      <h1>Things I like</h1>
      <h2>A photo gallery by Landon Cassman</h2>
      <button>
        <Link to={`/`}>Home</Link>
      </button>
      <main>
        <Routes>
          <Route path="/" element={<CategoryList />}></Route>
          <Route path="/:id" element={<PhotoListPage />}></Route>
          <Route path="*" element={<p>Oops, that URL is unknown</p>}></Route>
        </Routes>
      </main>
    </div>
  )
}
