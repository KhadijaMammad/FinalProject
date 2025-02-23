import React, { useState } from "react";
import '../../assets/styles/mainpage/sidebar.css'
import { FaMusic, FaTimes } from "react-icons/fa";

export default function NewSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [favSongs, setFavSongs] = useState([]);
  const [playlist, setPlaylist] = useState([]);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="container">
      <div className="sidebar">
        <button className="sidebar-toggle" onClick={toggleSidebar}>
          <FaMusic size={24} />
        </button>
        <div className={`sidebar ${isOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleSidebar}>
            <FaTimes size={24} />
          </button>
          <h2>Create My List</h2>
          <ul>
            {playlist.map((song, index) => (
              <li key={index}>{song.title}</li>
            ))}
          </ul>
          <h2>Fav Musics</h2>
          <ul>
            {favSongs.map((song, index) => (
              <li key={index}>{song.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
