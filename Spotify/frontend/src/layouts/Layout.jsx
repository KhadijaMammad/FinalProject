import React, {useState} from "react";
import Navbar from "./Navbar";
import {Outlet} from "react-router-dom";
import SongPlayer from "../pages/mainpage/SongPlayer";

export default function Layout() {

  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}
