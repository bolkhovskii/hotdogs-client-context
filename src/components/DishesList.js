import React, { useContext } from "react";
import { DishContext } from "../context/DishContext";
import { DishCard } from "./DishCard";

export const DishesList = () => {
  const { dishes } = useContext(DishContext);

  if (dishes) {
    console.log(dishes.dishData.dish);
    return dishes.dishData.dish.map((dish) => (
      <DishCard key={dish.id} dish={dish} />
    ));

    // dishes.dishData.dish.map((dish) => {
    //   console.log("DDDDIIIIIIsh", dish);
    //   return <DishCard key={dish.id} dish={dish} />;
    // });
  }

  return <div>List is empty</div>;
};
