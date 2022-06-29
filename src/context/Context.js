import React, { createContext } from "react";

const Cart = createContext();

function Context({ children }) {
  return <Cart.Provider value={1}>{children}</Cart.Provider>;
}

export default Context;
