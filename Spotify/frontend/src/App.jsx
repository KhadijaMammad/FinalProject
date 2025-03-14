import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/sign_in_up/Login";
import Register from "./pages/sign_in_up/Register";
import Home from "./pages/mainpage/Home";
import Premium from "./pages/mainpage/Premium";
import Layout from "./layouts/Layout";
import PremiumPayment from "./pages/mainpage/PremiumPayment";
import Library from "./pages/mainpage/Library";
import WishlistProvider from "./contexts/WishlistContext";
import Favorite from "./pages/mainpage/Wishlist";
import {MusicProvider} from "./pages/mainpage/MusicPlayer";
import AlbumProvider from "./contexts/AlbumContext";
import ArtistSongs from "./pages/mainpage/ArtistSongs";
import AuthProvider from "./contexts/AuthContext";

function App() {
  return (
    <>
      
        <AlbumProvider>
          <MusicProvider>
            <WishlistProvider>
              <AuthProvider>
               <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Layout />}>
                      <Route index element={<Home />} />
                      <Route path="premium" element={<Premium />} />
                      <Route
                        path="premiumpayment"
                        element={<PremiumPayment />}
                      />
                      <Route path="library" element={<Library />} />
                      <Route path="favorite" element={<Favorite />} />
                      <Route path="songs/:albumId" element={<ArtistSongs />} />
                    </Route>
                    <Route path="register" element={<Register />} />
                    <Route path="login" element={<Login />} />
                  </Routes>
                </BrowserRouter>
              
              </AuthProvider>
            </WishlistProvider>
          </MusicProvider>
        </AlbumProvider>
    </>
  );
}

export default App;
