import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export const CartProviderWrapper = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [showCart, setShowCart] = useState(false);

    return (
        <CartContext.Provider value={{ cart, setCart, showCart, setShowCart }}>
          {children}
        </CartContext.Provider>
    );
};

export const useCartContext = () => useContext(CartContext);


