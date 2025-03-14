import {useContext} from "react";
import {MusicContext} from "../../pages/mainpage/MusicPlayer";
import YouTubePlayer from "./YoutubePlayer";
import "../../assets/styles/mainpage/player.css";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseIcon from "@mui/icons-material/Pause";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";

export default function SongPlayer() {
  const {selectSong, isPlaying, togglePlayPause, nextTrack, prevTrack} =
    useContext(MusicContext);
    // console.log(currentSong);

  return (
    <div className="container">
      <div className="music-player">
        <div className="music-left">
          {selectSong && (
            <img src={selectSong.image} alt="" className="music-image" />
          )}
        </div>
        <div className="music-center">
          <div className="controls">
            <SkipPreviousIcon className="prev" onClick={prevTrack} />
            {isPlaying ? (
              <PauseIcon className="pause" onClick={togglePlayPause} />
            ) : (
              <PlayCircleOutlineIcon
                className="play"
                onClick={togglePlayPause}
              />
            )}
            <SkipNextIcon onClick={nextTrack} />
          </div>
        </div>
      </div>
    </div>
  );
}
