import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);

  const onAddCategory = (newCategory) => {
    //add valorant
    // setCategories([...categories, 'Valorant']);
    setCategories([...categories, newCategory]);
  }
  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}
      <AddCategory
        // setCategories={setCategories}
        onNewCategory={value => onAddCategory(value)}
      />
      {/* gif list */}
      <ol>
        {/* gif item */}
        {categories.map((category, index) => {
          return <li key={index}>{category}</li>
        })}
      </ol>
    </>
  )
}
