import React, { useState } from 'react'

export const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState();

  const handleInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;

    // De esta forma obtengo las categorias anteriores y hago el spread en un nuevo array
    setCategories(categories => [...categories, inputValue])

    //Limpio el input
    setInputValue('');
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        type="text"
        placeholder=" Buscar gif"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}
