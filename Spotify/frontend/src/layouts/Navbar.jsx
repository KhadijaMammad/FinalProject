import React from "react";
import "../assets/styles/layouts-page/navbar.css";
import NavbarLogo from "../assets/images/spotify-logo-white.png";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-left">
            <img src={NavbarLogo} alt="spotify logo" style={{width: "50px"}} />
          </div>
          <div className="navbar-right">
            <i class="fa-solid fa-house house-icon"></i>
            <div className="navbar-search">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                id="search"
                placeholder="What do you want to play?"
              />
            </div>
            <div className="explore">
              <button className="premium">Explore premium</button>
            </div>
            <div className="search-install">
              <i class="fa-solid fa-arrow-down arrow"></i>
              <span>Install App</span>
            </div>
            <div className="search-bell">
              <i class="fa-regular fa-bell bell"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
