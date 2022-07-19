import React, { useState } from 'react'

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One punch', 'Dragon ball']);
  console.log(categories);
  return (
    <>
      {/* title */}
      <h1>GifExpertApp</h1>

      {/* input */}

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
