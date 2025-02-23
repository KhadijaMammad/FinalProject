// import axios from "axios";
// import React, {useContext, useEffect, useState} from "react";
// import {useParams} from "react-router-dom";
// import "../../assets/styles/mainpage/artistSong.css";
// import {AlbumContext} from "../../contexts/AlbumContext";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { MusicContext } from "./MusicPlayer";

// export default function ArtistSongs() {
//   const {albumId} = useParams();
//   const {albums} = useContext(AlbumContext);
//   const {songs} = useContext(MusicContext)
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="artist-songs">
//           {/* <div className="carousel-container">
//             <Slider {...settings}>
//               {albums.map((album) => (
//                 <div key={album.id} className="carousel-item">
//                   <div className="carousel-image">
//                     <img src={album.image} />
//                   </div>
//                   <div className="carousel-info">
//                     <h3>{album.artist}</h3>
//                     <p>{album.genre}</p>
//                   </div>
//                 </div>
//               ))}
//             </Slider>
//           </div> */}
//           <h1>Songs by Artist</h1>
//           <div className="song-list">
//         {artistSongs.map((song) => (
//           <div key={song._id} className="song-card">
//             <h3>{song.name}</h3>
//             <img src={song.coverImage} alt={song.name} style={{width:'150px'}}/>
//             <p>{song.artist}</p>
//           </div>
//         ))}
//       </div>
//         </div>
//       </div>
//     </>
//   );
// }
