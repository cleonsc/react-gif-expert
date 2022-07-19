import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

  const handleAddCategory = () => {
    //add valorant
    setCategories([...categories, 'Valorant']);
  }
  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory  setCategories={setCategories}/>
      {/* gif list */}
      <button onClick={handleAddCategory}>Agregar</button>
      <ol>
        {/* gif item */}
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>
    </>
  )
}
