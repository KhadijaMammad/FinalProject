import React, { useContext, useState } from "react";
import "../assets/styles/layouts-page/navbar.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="container">
      <div className="navbar">
        <div className="navbar-left">
          <ul>
            <Link to="/" className="navbar-list">
              Explore
            </Link>
            <Link className="navbar-list" to="/library">
              Musics
            </Link>
            <Link className="navbar-list" to="/premium">
              Premium
            </Link>
            <Link className="navbar-list">Selling</Link>
            <Link to="/favorite" className="navbar-list">
              Favorites
            </Link>
          </ul>
        </div>
        <div className="navbar-right">
          {/* <div className="searching">
            <input
              type="search"
              placeholder="Search music"
              className="search"
              value={searchItem}
              onChange={(e) => setSearchItem(e.target.value)}
            />
          </div> */}
          {user ? (
            <button className="sign-in" onClick={logout}>
              Sign Out
            </button>
          ) : (
            <button className="sign-in">
              <Link className="navbar-list" to="/register">
                Sign In
              </Link>
            </button>
          )}
          <div className="navbar-logo">
            <span>InnerVibe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
