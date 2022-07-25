import React, { useEffect } from 'react'
import { getGifs } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {
  useEffect(()=>{
    getGifs(category);
  }, []) //[] son las dependencias, si esta vacío este hook solo se ejecuta la primera vez q carga el componente

  return (
    <>
      <h3>{category}</h3>
    </>
  )
}
