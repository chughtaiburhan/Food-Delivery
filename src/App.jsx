import { Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import PlaceOrder from "./pages/placeOrder/PlaceOrder"
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import Footer from "./components/footer/Footer";
import { useState } from "react";
import Login from "./LoginPopup/Login";

function App() {
  const [showLogin,setShowLogin]=useState(false);

  return (
    <>
    { showLogin ? <Login setShowLogin={setShowLogin}/> : <> </> }
      <div className="app">
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/PlaceOrder" element={<PlaceOrder/>} />
      </Routes>
      </div>
      <Footer/>
    </>
  )
}

export default App
