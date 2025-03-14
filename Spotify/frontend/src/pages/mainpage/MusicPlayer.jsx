import { useState, useEffect, createContext } from "react";

export const MusicContext = createContext();

export function MusicProvider({ children }) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  const selectSong = (youtubeId) => {
    const index = songs.findIndex((song) => song.youtubeId === youtubeId);
    if (index !== -1) {
      setCurrentIndex(index);
      setCurrentSong(youtubeId);
      setIsPlaying(true); 
    }
  };

  const nextTrack = () => {
    if (currentIndex < songs.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentSong(songs[nextIndex].youtubeId);
      setIsPlaying(true); 
    }
  };

  const prevTrack = () => {
    if (currentIndex > 0) {
      const prevIndex = currentIndex - 1;
      setCurrentIndex(prevIndex);
      setCurrentSong(songs[prevIndex].youtubeId);
      setIsPlaying(true); 
    }
  };

  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };

  return (
    <MusicContext.Provider
      value={{
        songs,
        setSongs,
        currentSong,
        selectSong,
        isPlaying,
        togglePlayPause,
        nextTrack,
        prevTrack,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
