import React, {useContext, useEffect, useState} from "react";
import "../../assets/styles/mainpage/library.css";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper/modules";
import axios from "axios";
import Songs from "./Songs";
import { useNavigate } from "react-router-dom";
import { MusicProvider} from "./MusicPlayer";
import { AlbumContext } from "../../contexts/AlbumContext";
import SongPlayer from "./SongPlayer";

export default function Library() {
  const {albums} = useContext(AlbumContext);
  const navigate = useNavigate();

  const handleClick = (albumId) => {
    setTimeout(() => navigate(`/songs/${albumId}`), 100);
  };

  // const filteredAlbums = albums.filter((album)=>{
  //   album.artist.toLowerCase().includes(searchItem.toLowerCase())
  // })

  return (
    <>
      <div className="container">
        <div className="library-page">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={5}
            loop={true}
            autoplay={{
              delay: 1000,
            }}
            passiveListeners={false}
            className="swiper-container"
          >
            {albums.map((album) => (
              <SwiperSlide key={album._id}>
                <div className="album-cards">
                  <div className="album-card" onClick={()=>handleClick(album._id)}>
                    <img
                      src={album.image}
                      alt={album.artist}
                      className="album-image"
                    />
                    <div className="album-info">
                      <p className="album-artist">{album.artist}</p>
                      <p className="album-genre">{album.genre}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <Songs/>
        {/* <SongPlayer/> */}
      </div>
      
    </>
  );
}
