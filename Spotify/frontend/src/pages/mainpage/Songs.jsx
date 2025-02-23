import React, {useContext, useEffect, useState} from "react";
import "../../assets/styles/mainpage/songs.css";
import YouTubePlayer from "./YoutubePlayer";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import AddIcon from '@mui/icons-material/Add';
import { WishlistContext } from "../../contexts/WishlistContext";
import { MusicContext } from "../../pages/mainpage/MusicPlayer";

export default function Songs() {
  const {songs, setSongs} = useContext(MusicContext)
  const [currentSong, setCurrentSong] = useState(null);
  const {favorite, addToWishlist} = useContext(WishlistContext)

 

  return (
    <>
      <div className="container">
        <div className="songs-page">
          <div className="song-album">
            <div className="songs-section">
              <h2 className="song-heading">Top Songs</h2>
              <div className="songs-grid">
                {songs.map((song) => (
                  <div
                    className="song-item"
                    key={song._id}
                    onClick={() => setCurrentSong(song.youtubeId)}
                  >
                    <img
                      src={song.coverImage}
                      alt={song.name}
                      className="song-image"
                    />
                    <div className="song-info">
                      <p className="song-name">{song.name}</p>
                      <span className="artist-name" style={{color: "gray"}}>
                        {song.artist}
                      </span>
                    </div>
                    <div className="song-icon">
                    <FavoriteBorderIcon className="fav-icon" onClick={()=>addToWishlist(song)}/>
                      <AddIcon className="add-icon"/>
                    </div>
                  </div>
                ))}
                {currentSong && <YouTubePlayer youtubeId={currentSong} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
