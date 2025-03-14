import React, { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import "../../assets/styles/layouts-page/wishlist.css"
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Wishlist() {
  const { favorite, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container">
      <div className="wishlist-page">
        <h2 className="wishlist-heading">My Wishlist</h2>
        {favorite.length === 0 ? (
          <p className="empty-wishlist">Your wishlist is empty.</p>
        ) : (
          <div className="wishlist-grid">
            {favorite.map((song) => (
              <div className="wishlist-item" key={song._id}>
                <img
                  src={song.coverImage}
                  alt={song.name}
                  className="wishlist-image"
                />
                <div className="wishlist-info">
                  <p className="wishlist-name">{song.name}</p>
                  <span className="wishlist-artist">{song.artist}</span>
                </div>
                <div className="wishlist-icon">
                  <FavoriteIcon
                    className="fav-icon"
                    onClick={() => removeFromWishlist(song._id)}
                    style={{ color: "red", cursor: "pointer" }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
