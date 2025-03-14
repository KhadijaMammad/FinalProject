import React, { useContext } from "react";
import "../../assets/styles/mainpage/songs.css";
import YouTubePlayer from "./YoutubePlayer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import { WishlistContext } from "../../contexts/WishlistContext";
import { MusicContext } from "../../pages/mainpage/MusicPlayer";
import ErrorBoundary from "./ErrorBoundary";

export default function Songs() {
  const { songs, selectSong, currentSong, isPlaying } = useContext(MusicContext);
  const { favorite, addToWishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="container">
      <div className="songs-page">
        <div className="song-album">
          <div className="songs-section">
            <h2 className="song-heading">Top Songs</h2>
            <div className="songs-grid">
              {songs.map((song) => {
                const isInWishlist = favorite.some((item) => item._id === song._id);

                return (
                  <div className="song-item" key={song._id}>
                    <img
                      src={song.coverImage}
                      alt={song.name}
                      className="song-image"
                      onClick={() => selectSong(song.youtubeId)}
                    />
                    <div className="song-info">
                      <p className="song-name">{song.name}</p>
                      <span className="artist-name" style={{ color: "gray" }}>
                        {song.artist}
                      </span>
                    </div>
                    <div className="song-icon">
                      {isInWishlist ? (
                        <FavoriteIcon 
                          className="fav-icon" 
                          onClick={() => removeFromWishlist(song._id)} 
                          style={{ color: "red" }} 
                        />
                      ) : (
                        <FavoriteBorderIcon 
                          className="fav-icon" 
                          onClick={() => addToWishlist(song)} 
                        />
                      )}
                    </div>
                  </div>
                );
              })}
              {currentSong && (
                <ErrorBoundary>
                  <YouTubePlayer youtubeId={currentSong} isPlaying={isPlaying} />
                </ErrorBoundary>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
