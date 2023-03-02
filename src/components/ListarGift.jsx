// import { useState } from "react";

import { useEffect,useState } from "react";
import { getGifs } from "../helpers/GetGifs";
import { GiftItem } from "./GiftItem";

export const ListarGift = ({ category }) => {
  
  const [images, setImages] = useState([])

  const getImages = async()=>{
    const newImages = await getGifs(category)
    setImages(newImages)
  }

  useEffect( ()=>{
    getGifs(category);
    getImages()
  }, [] )
  return (
    <>
      <h1>{category}</h1>
      <div>
        {
          images.map((image) =>{
            return(
              <GiftItem 
              key={image.id} 
              { ...image }
              />
            )
          })
        }
      </div>
    </>
  );
};
