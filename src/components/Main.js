import React, { useContext, useEffect, useCallback } from "react";
import axios from "axios";
import { DishContext } from "../context/DishContext";
import { useDish } from "../controllers/auth/dish";
import { DishesList } from "./DishesList";
import { AuthContext } from "../context/AuthContext";

export const Main = () => {
  const { token } = useContext(AuthContext);
  const { dishes, readDishes } = useDish();
  const getdishHandler = async () => {
    await axios
      .get("/api/dish", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        readDishes(res.data);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getdishHandler();
  }, []);

  return (
    <DishContext.Provider value={{ dishes, readDishes }}>
      <div>
        <h1>Main</h1>
        <DishesList />
      </div>
    </DishContext.Provider>
  );
};
