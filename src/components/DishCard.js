import React, { useContext } from "react";
import { DishContext } from "../context/DishContext";

export const DishCard = (dish) => {
  const { pictureName, dishesName, price, description } = dish.dish;
  console.log("atata  ", dish);
  return (
    <div>
      <ul>
        <li>
          <h1>{pictureName}</h1>
        </li>
        <li>
          <h2>{dishesName}</h2>
        </li>
        <li>
          <h3>{price}</h3>
        </li>
        <li>
          <h4>{description}</h4>
        </li>
      </ul>
    </div>
  );
};
