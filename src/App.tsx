import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { Product } from "./pages/Product";
import { Wishlist } from "./pages/Wishlist";

export function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="products/:sku" element={<Product />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
