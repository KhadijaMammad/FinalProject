import React, { createContext, useEffect, useState } from "react";

export const WishlistContext = createContext();

export default function WishlistProvider({ children }) {
  const localFavorite = JSON.parse(localStorage.getItem("favorite")) || [];
  const [favorite, setFavorite] = useState(localFavorite);

  useEffect(() => {
    localStorage.setItem("favorite", JSON.stringify(favorite));
  }, [favorite]);

  function addToWishlist(item) {
    setFavorite((prevFavorites) => {
      const isExist = prevFavorites.some((x) => x._id === item._id);
      if (!isExist) {
        return [...prevFavorites, item]; 
      }
      return prevFavorites;
    });
  }

  function removeFromWishlist(itemId) {
    setFavorite((prevFavorites) => prevFavorites.filter((x) => x._id !== itemId));
  }

  return (
    <WishlistContext.Provider value={{ favorite, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}
