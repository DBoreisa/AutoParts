import React, { createContext, useMemo, useState } from "react";

export const SearchContext = createContext();

export const SearchProviderWrapper = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
        <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
          <SearchProvider>{children}</SearchProvider>
        </SearchContext.Provider>
    );
};