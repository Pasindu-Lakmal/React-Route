import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { OrderSummery } from "./components/OrderSummery";
import { Nomatch } from "./components/Nomatch";
import { Products } from "./Products";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="product" element={<Products />}>
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
