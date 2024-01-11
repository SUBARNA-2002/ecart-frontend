import { useState } from "react";
import "./App.css";
import { CartNavbar } from "./components/CartNavbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [cartdata, setCartData] = useState([]);
  return (
    <>
      <Router>
        <CartNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail cartdata={cartdata} setCartData={setCartData} />} />
          <Route path="/cart"  element={<Cart />} />
        </Routes>
        <Footer />
        <ToastContainer />
      </Router>
    </>
  );
}

export default App;
