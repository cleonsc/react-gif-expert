import React, { useState } from 'react'

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState(''); //Esto no puede ser undefined

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  }

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newCategory = inputValue.trim();
    
    if (newCategory.length <= 1) return;

    // De esta forma obtengo las categorias anteriores y hago el spread en un nuevo array
    // setCategories(categories => [...categories, inputValue])
    onNewCategory(newCategory);

    //Limpio el input
    setInputValue('');
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder=" Buscar gif"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
