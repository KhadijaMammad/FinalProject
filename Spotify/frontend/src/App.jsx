import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./pages/sign_in_up/Login";
import Register from "./pages/sign_in_up/Register";
import Home from "./pages/mainpage/Home";
import Premium from "./pages/mainpage/Premium";
import Layout from "./layouts/Layout";
import PremiumPayment from "./pages/mainpage/PremiumPayment";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home/>} />
          <Route path="premium" element={<Premium/>}/>
          <Route path="premiumpayment" element={<PremiumPayment/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
