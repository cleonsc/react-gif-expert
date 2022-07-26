import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifts';
import { GifItem } from './GifItem';

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([])

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages)
  }

  useEffect(() => {
    //Opcion 2: envolver la funcion en otra funcion asyncrona
    getImages(); //No hace falta esperarlo

  }, []) //[] son las dependencias, si esta vacío este hook solo se ejecuta la primera vez q carga el componente

  return (
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          images.map((image) => (
            <GifItem
              key={image.id}
              {...image} //Esto permite esparcir todas las propiedades y enviarlas al componente.
            />
          ))
        }
      </div>
    </>
  )
}
