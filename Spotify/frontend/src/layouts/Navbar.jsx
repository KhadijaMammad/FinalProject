import React from "react";
import "../assets/styles/layouts-page/navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-left">
            <ul className="navbar-lists">
              <Link className="navbar-list">For You</Link>
              <Link className="navbar-list">Library</Link>
              <Link className="navbar-list">Browse</Link>
              <Link className="navbar-list">Radio</Link>
            </ul>
          </div>

          <div className="navbar-right">
            <div className="navbar-search">
              <i class="fa-solid fa-magnifying-glass search-icon"></i>
              <input
                type="text"
                id="search"
                placeholder="What do you want to play?"
              />
            </div>
            <div className="explore">
              <Link to={'/premium'}><button className="premium">Explore premium</button></Link>
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
