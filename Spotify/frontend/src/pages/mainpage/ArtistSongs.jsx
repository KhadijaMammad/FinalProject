import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite"; 
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { MusicContext } from "./MusicPlayer";
import { WishlistContext } from "../../contexts/WishlistContext";
import axios from "axios"
import "../../assets/styles/mainpage/artistsong.css"


export default function ArtistSongs() {
  const { albumId } = useParams();
  const { songs, setSongs } = useContext(MusicContext);
  const { favorite, addToWishlist, removeFromWishlist } = useContext(WishlistContext);
  const [currentSong, setCurrentSong] = useState(null);

  const isInWishlist = (songId) => favorite.some((item) => item._id === songId);

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/songs?artistId=${albumId}`);
        setSongs(response.data); 
      } catch (error) {
        console.error("Error fetching songs", error);
      }
    };

    fetchSongs();
  }, [albumId, setSongs]); 

  return (
    <div className="container">
      <div className="artist-songs">
        <h1 className="artist-heading">Songs by Artist</h1>
        <div className="song-list">
          {songs.length > 0 ? (
            songs.map((song) => (
              <div key={song._id} className="song-card" onClick={() => setCurrentSong(song.youtubeId)}>
                <div className="card-image">
                  <img src={song.coverImage} alt="" className="img" />
                  <div 
                    className="wishlist-icon" 
                    onClick={(e) => {
                      e.stopPropagation(); 
                      isInWishlist(song._id) ? removeFromWishlist(song._id) : addToWishlist(song);
                    }}
                  >
                    {isInWishlist(song._id) ? (
                      <FavoriteIcon style={{ fontSize: "30px", color: "red" }} />
                    ) : (
                      <FavoriteBorderIcon style={{ fontSize: "30px", color: "white" }} />
                    )}
                  </div>
                </div>
                <div className="artist-info">
                  <h3 className="artist-song-name">{song.name}</h3>
                  <p className="card-artist">{song.artist}</p>
                </div>
              </div>
            ))
          ) : (
            <p>No songs found for this artist.</p>
          )}
          {currentSong && <YouTubePlayer youtubeId={currentSong} />}
        </div>
      </div>
    </div>
  );
}
