import "./App.css";
import { CartNavbar } from "./components/CartNavbar";
import { Footer } from "./components/Footer";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./pages/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <CartNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
