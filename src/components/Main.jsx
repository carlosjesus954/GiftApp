import { AddGift, ListarGift } from "./index";
import { useState } from "react";

export const Main = () => {
  const [categories, setCategories] = useState(["Deku"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
  };
  return (
    <main className="main wrapper">
      {/* Buscador */}
      <AddGift
        // setCategories={setCategories}
        onNewCategory={onAddCategory}
      />

      {/* Listar */}
      {categories.map((category) => {
        return <ListarGift key={category} category={category} />;
      })}

      {/* <ListarGift categories={categories} /> */}
    </main>
  );
};
