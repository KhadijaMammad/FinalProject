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
import SearchProvider from "./contexts/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <AlbumProvider>
          <MusicProvider>
            <WishlistProvider>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="premium" element={<Premium />} />
                    <Route path="premiumpayment" element={<PremiumPayment />} />
                    <Route path="library" element={<Library />} />
                    <Route path="favorite" element={<Favorite />} />
                  </Route>
                  <Route path="register" element={<Register />} />
                  <Route path="login" element={<Login />} />
                </Routes>
              </BrowserRouter>
            </WishlistProvider>
          </MusicProvider>
        </AlbumProvider>
      </SearchProvider>
    </>
  );
}

export default App;
