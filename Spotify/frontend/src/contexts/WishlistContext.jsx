import React, { createContext, useEffect, useState } from 'react'


export let WishlistContext = createContext()

export default function WishlistProvider({children}) {
    let localFavorite=JSON.parse(localStorage.getItem("favorite"))
    let [favorite,setFavorite]=useState(localFavorite ? localFavorite :[])


    useEffect(()=>{
        localStorage.setItem("favorite",JSON.stringify(favorite))
    },[favorite]);

    function toggleWishlist(item) {
        const itemIndex = favorite.findIndex((x) => x.id === item.id);
        if (itemIndex === -1) {
          setFavorite([...favorite, item]);
          return
        }
        else {
          setFavorite(favorite.filter(x => x.id !== item.id))
        }
    
      }

  return (
    <>
      <WishlistContext.Provider value={{favorite,setFavorite,toggleWishlist}}>
        {children}
      </WishlistContext.Provider>
    </>
  )
}
