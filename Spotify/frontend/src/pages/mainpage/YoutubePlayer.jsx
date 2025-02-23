import React, { useEffect, useState } from "react";

export default function YouTubePlayer({ youtubeId }) {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (window.YT && youtubeId) {
      if (player) {
        player.loadVideoById(youtubeId); 
      } else {
        const newPlayer = new window.YT.Player("youtube-player", {
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
            onReady: (event) => event.target.playVideo(),
          },
        });
        setPlayer(newPlayer);
      }
    }
  }, [youtubeId]);

  return <div id="youtube-player"></div>;
}
