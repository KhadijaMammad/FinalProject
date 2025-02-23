import {useState, useRef, useEffect, createContext, useContext} from "react";
import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
  FaRandom,
  FaRedo,
} from "react-icons/fa";
import "../../assets/styles/mainpage/musicplayer.css";

export const MusicContext = createContext();

export function MusicProvider({children}) {
  const [songs, setSongs] = useState([]);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoop, setIsLoop] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    fetch("http://localhost:3000/songs")
      .then((res) => res.json())
      .then((data) => setSongs(data))
      .catch((err) => console.error("Error fetching songs:", err));
  }, []);

  useEffect(() => {
    if (currentSong) {
      audioRef.current.src = currentSong.src;
      if (isPlaying) audioRef.current.play();
    }
  }, [currentSong]);

  const togglePlayPause = () => {
    if (!currentSong) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    if (!songs.length) return;
    let nextIndex =
      songs.findIndex((song) => song._id === currentSong?._id) + 1;
    if (nextIndex >= songs.length) nextIndex = 0;
    setCurrentSong(songs[nextIndex]);
  };

  const playPrev = () => {
    if (!songs.length) return;
    let prevIndex =
      songs.findIndex((song) => song._id === currentSong?._id) - 1;
    if (prevIndex < 0) prevIndex = songs.length - 1;
    setCurrentSong(songs[prevIndex]);
  };

  const toggleLoop = () => {
    setIsLoop(!isLoop);
    audioRef.current.loop = !isLoop;
  };

  const toggleShuffle = () => {
    setIsShuffle(!isShuffle);
  };

  useEffect(() => {
    audioRef.current.onended = () => {
      if (isLoop) {
        audioRef.current.play();
      } else if (isShuffle) {
        const randomIndex = Math.floor(Math.random() * songs.length);
        setCurrentSong(songs[randomIndex]);
      } else {
        playNext();
      }
    };
  }, [isLoop, isShuffle, songs]);

  return (
    <MusicContext.Provider
      value={{songs, currentSong, setCurrentSong, isPlaying, togglePlayPause}}
    >
      {children}
      <div className="music-player">
        {currentSong && (
          <>
            <div className="player-info">
              <img
                src={currentSong.coverImage}
                alt={currentSong.name}
                className="cover"
              />
              <span className="title">{currentSong.title}</span>
            </div>
            <div className="controls">
              <button onClick={playPrev}>
                <FaStepBackward />
              </button>
              <button onClick={togglePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <button onClick={playNext}>
                <FaStepForward />
              </button>
              <button onClick={toggleLoop} className={isLoop ? "active" : ""}>
                <FaRedo />
              </button>
              <button
                onClick={toggleShuffle}
                className={isShuffle ? "active" : ""}
              >
                <FaRandom />
              </button>
            </div>
          </>
        )}
      </div>
    </MusicContext.Provider>
  );
}
