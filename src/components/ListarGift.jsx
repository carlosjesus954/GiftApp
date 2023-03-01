// import { useState } from "react";

export const ListarGift = ({ categories }) => {
  return (
    <>
      {categories.map((category) => (
        <div key={category}>
          <h1>{category}</h1>
          <p>{category}</p>
        </div>
      ))}
    </>
  );
};
