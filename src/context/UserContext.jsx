import React, { createContext, useState } from "react";
import { food_items } from "../pages/food";

export const dataContext = createContext();

function UserContext({ children }) {
  const [Cate, setCate] = useState(food_items);
  const [input, setInput] = useState("");
  const [showCart, setShowCart] = useState(false);

  return (
    <dataContext.Provider
      value={{ Cate, setCate, input, setInput, showCart, setShowCart }}
    >
      {children}
    </dataContext.Provider>
  );
}

export default UserContext;
