import React, { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProviderWrapper = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    //console.log("Init cart from localStorage:", storedCart);
    return storedCart ? JSON.parse(storedCart) : [];
  });

  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    //console.log("Saving to localStorage:", cart);
  }, [cart]);

    return (
        <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
          {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);


