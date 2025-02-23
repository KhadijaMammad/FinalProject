import React, {useContext, useState} from "react";
import "../assets/styles/layouts-page/navbar.css";
import {Link} from "react-router-dom";
import {Menu, Close} from "@mui/icons-material";
import {SearchContext} from "../contexts/SearchContext";
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const {searchItem, setSearchItem} = useContext(SearchContext);

  return (
    <>
      <div className="container">
        <div className="navbar">
          <div className="navbar-left">
            {/* <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <Close /> : <Menu />}
          </button> */}
            <ul>
              <Link to={"/"} className="navbar-list">
                Explore
              </Link>
              <Link className="navbar-list" to={"library"}>
                Musics
              </Link>
              <Link className="navbar-list" to={"premium"}>
                Premium
              </Link>
              <Link className="navbar-list">Selling</Link>
              <Link to={"favorite"} className="navbar-list">
                Favorites
              </Link>
            </ul>
          </div>
          <div className="navbar-right">
            <div className="searching">
              <input
                type="search"
                placeholder="Search music"
                className="search"
                value={searchItem}
                onChange={(e)=>setSearchItem(e.target.value)}
              />
            </div>
            <button className="sign-in">
              {" "}
              <Link className="navbar-list" to={"register"}>
                Sign In
              </Link>
            </button>
            <div className="navbar-logo">
              <span>InnerVibe</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
