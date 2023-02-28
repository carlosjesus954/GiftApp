import { AddGift, ListarGift } from "./index";
import { useState } from "react";

export const Main = () => {
  const [categories, setCategories] = useState(["One punch", "Goku", "Deku"]);

  const onAddCategory = (newCategory) =>{
    if (categories.includes(newCategory)) return
    setCategories([...categories, newCategory])
  }
  return (
    <main className="main">
      {/* Buscador */}
      <AddGift 
      // setCategories={setCategories} 
      onNewCategory={onAddCategory}
      />

      {/* Listar */}
      <ListarGift categories={categories} />
    </main>
  );
};
