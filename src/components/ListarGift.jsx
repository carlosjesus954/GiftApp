// import { useState } from "react";

export const ListarGift = ({ categories, actualizarCategorias }) => {
  return (
    <>
      
      <ul className="main__ul">
        {categories.map((category) => {
          return <li key={category}>{category}</li>;
        })}
        {/* <li className="main__ul">Hola</li> */}
      </ul>

    </>
  );
};
