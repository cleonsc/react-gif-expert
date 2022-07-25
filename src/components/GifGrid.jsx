import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(() => {
    //Opcion 1:
    // getGifs(category)
    //   .then(newImages => setImage(newImages));

    //Opcion 2: envolver la funcion en otra funcion asyncrona
    getImages(); //No hace falta esperarlo

  }, []) //[] son las dependencias, si esta vacío este hook solo se ejecuta la primera vez q carga el componente

  return (
    <>
      <h3>{category}</h3>
      <ol>
        {
          images.map(({id, title}) => (
            <li key={id}>{title}</li>
          ))
        }
      </ol>
    </>
  )
}
