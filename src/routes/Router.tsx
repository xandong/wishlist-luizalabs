import { Routes, Route } from "react-router-dom";
import { Error } from "../pages/Error";
import { Home } from "../pages/Home";
import { Product } from "../pages/Product";
import { Wishlist } from "../pages/Wishlist";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="products" element={<Home />} />
      <Route path="wishlist" element={<Wishlist />} />
      <Route path="products/:sku" element={<Product />} />
      <Route path="/*" element={<Error />} />
    </Routes>
  );
}
