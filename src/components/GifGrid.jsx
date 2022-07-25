import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {

  const [counter, setCounter] = useState(10);

  useEffect(()=>{
    getGifs(category);
  }, []) //[] son las dependencias, si esta vacío este hook solo se ejecuta la primera vez q carga el componente
  

  return (
    <>
      <h3>{category}</h3>
      <p>Hola Mundo</p>
      <h5>{counter}</h5>
      <button onClick={()=>setCounter(counter+1)}>+1</button>
    </>
  )
}
