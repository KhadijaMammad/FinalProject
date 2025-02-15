import React, { useState } from "react";
import "../assets/styles/layouts-page/sidebar.css";

export default function Sidebar() {
  const [isActive, setIsActive] = useState(false);
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [isMusicClickOpen, setIsMusicClickOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSearchClick = () => {
    setIsActive(!isActive);
  };

  const handleSortClick = () => {
    setIsSortOpen(!isSortOpen);
  };

  const handleMusicClick = () => {
    setIsMusicClickOpen(!isMusicClickOpen);
  };

  const handleExpandClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
        <div className="sidebar-header">
          <div className="first-text">
            <i className="fa-regular fa-bookmark"></i>
            <span>Your Library</span>
          </div>
          <div className="sidebar-icons">
            <i className="fa-solid fa-plus" onClick={handleMusicClick}></i>
            <div className={`music-click ${isMusicClickOpen ? "active" : ""}`}>
              <div className="click-first">
                <i className="fa-solid fa-music"></i>
                <span>Create a new playlist</span>
              </div>
              <div className="click-second">
                <i className="fa-regular fa-folder"></i>
                <span>Create a playlist folder</span>
              </div>
            </div>
            <i className="fa-solid fa-arrow-right" onClick={handleExpandClick}></i>
          </div>
        </div>
        <button className="playlist">Playlists</button>
        <div className="sidebar-search">
          <i className="fa-solid fa-magnifying-glass" onClick={handleSearchClick}></i>
          <input
            type="text"
            placeholder="Search in your library"
            className={`search-input ${isActive ? "active" : ""}`}
          />
          <div className="sidebar-sorts">
            <span onClick={handleSortClick}>Recents</span>
            <i className="fa-solid fa-list-ul"></i>
            <div className={`sort-lists ${isSortOpen ? "active" : ""}`}>
              <div className="sort-first">
                <h5>Sort by</h5>
                <p>Recents</p>
                <p>Recently Added</p>
                <p>Alphabetical</p>
                <p>Creator</p>
              </div>
              <div className="sort-second">
                <h5>View as</h5>
                <p>
                  <i className="fa-solid fa-bars"></i> <span>Compact</span>
                </p>
                <p>
                  <i className="fa-solid fa-list-ul"></i> <span>List</span>
                </p>
                <p>
                  <i className="fa-solid fa-border-all"></i> <span>Grid</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}