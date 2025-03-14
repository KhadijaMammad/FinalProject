import React, { useEffect, useRef } from "react";

export default function YouTubePlayer({ youtubeId, isPlaying }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if (window.YT && youtubeId) {
      if (playerRef.current) {
        playerRef.current.loadVideoById(youtubeId);
      } else {
        playerRef.current = new window.YT.Player("youtube-player", {
          height: "0",
          width: "0",
          videoId: youtubeId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            showinfo: 0,
            modestbranding: 1,
            loop: 1,
            playlist: youtubeId,
          },
          events: {
            onReady: (event) => {
              event.target.playVideo; 
            },
            onStateChange: (event) => {
              if (event.data === window.YT.PlayerState.ENDED) {
                event.target.playVideo(youtubeId);
              }
            },
          },
        });
      }
    }
  }, [youtubeId]); 

  useEffect(() => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.playVideo(youtubeId);
      } else {
        playerRef.current.pauseVideo(youtubeId);
      }
    }
  }, [isPlaying]); 

  return <div id="youtube-player"></div>;
}
