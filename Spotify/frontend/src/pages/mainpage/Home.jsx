import React from "react";
import "../../assets/styles/mainpage/home.css";
import HomeImage from "../../assets/images/m-9.jpg";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="home-page">
          <div className="home-image">
            <img src={HomeImage} alt="Home Image" className="home-img" />
          </div>
          <div className="home-text">
            <h2 className="home-head">
              Step into a world where every beat tells a story
            </h2>
            <p className="home-paragraph">Live the music as you feel it</p>
            <Link to={'library'}>
              <motion.button
                className="home-button"
                initial={{y: 50, opacity: 0}}
                animate={{y: 0, opacity: 1}}
                transition={{duration: 0.8, ease: "easeOut"}}
              >
                Discover now
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
