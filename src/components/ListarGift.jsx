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
      <h2 className="main__titulo" >{category}</h2>
      <div className="main__container">
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
