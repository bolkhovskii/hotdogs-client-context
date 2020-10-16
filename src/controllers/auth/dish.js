import { useState, useCallback, useEffect } from "react";

const storageName = "dishData";

export const useDish = () => {
  const [dishes, setDishes] = useState(null);

  const readDishes = useCallback((dishData) => {
    setDishes({ ...dishes, dishData });
  }, []);

  useEffect(() => {
    if (dishes) {
      readDishes(dishes);
    }
  }, [readDishes]);

  return { dishes, readDishes };
};
