import "./styles.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Product from "./pages/Product";
import Wishlist from "./pages/Wishlist";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to="/">Home</NavLink> ||
        <NavLink to="/cart"> Cart</NavLink> ||
        <NavLink to="/wishlist"> Wishlist</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/product/:gadgetId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}
