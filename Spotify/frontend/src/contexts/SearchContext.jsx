import React, {createContext, useState} from "react";

export const SearchContext = createContext();
export default function SearchProvider({children}) {
  const [searchItem, setSearchItem] = useState("");

  return (
    <SearchContext.Provider value={{searchItem, setSearchItem}}>
      {children}
    </SearchContext.Provider>
  );
}
