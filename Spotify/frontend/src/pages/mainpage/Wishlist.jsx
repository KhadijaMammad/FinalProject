import React, { useContext } from 'react'
import { WishlistContext } from '../../contexts/WishlistContext'

export default function Favorite() {
    const {favorite, setFavorite} = useContext(WishlistContext)
  return (
    <>
    <div className="container">
        <div className="fav-page">
        wishlist
        </div>
    </div>
    
    </>
  )
}
