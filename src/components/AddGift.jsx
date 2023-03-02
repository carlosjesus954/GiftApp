import React, { useState } from "react";

export const AddGift = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const buscarMeme = (event) => {
    event.preventDefault();
    if (inputValue.trim().length < 1) return;
    onNewCategory(inputValue.trim());
    setInputValue("");
  };
  
  return (

    <form action="#" method="#" className="main__form" onSubmit={buscarMeme}>
      <input
        type="text"
        name="search"
        value={inputValue}
        onChange={onInputChange}
        placeholder="Buscar gift"
        className="main__input"
      />

    </form>
  );
};
