import React, { createContext, useContext, useState } from "react";

export const SearchContext = createContext();

export const SearchProviderWrapper = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
          {children}
        </SearchContext.Provider>
    );
};

export const useSearch = () => useContext(SearchContext);

// export const useSearch = () => useContext(SearchContext); leidzia aiskiau naudoti konteksta: const { query, setQuery } = useSearch();