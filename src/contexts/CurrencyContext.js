import React, { createContext, useContext, useEffect, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProviderWrapper = ({children}) => {
    const [currency, setCurrency] = useState(() => {
        return localStorage.getItem("currency") || "EUR";
    });

    useEffect(() => {
        localStorage.setItem("currency", currency);
    }, [currency]);

    return (
        <CurrencyContext.Provider value={{ currency, setCurrency }}>
            {children}
        </CurrencyContext.Provider>
    );
};

export const useCurrencyContext = () => useContext(CurrencyContext);