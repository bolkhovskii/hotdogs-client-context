import { createContext } from "react";

function oops() {}

export const DishContext = createContext({
  dishes: [],
  readDishes: oops,
});
