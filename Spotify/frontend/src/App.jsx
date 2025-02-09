import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/sign_in_up/Login";
import Register from "./pages/sign_in_up/Register";
import Home from "./pages/mainpage/Home";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
