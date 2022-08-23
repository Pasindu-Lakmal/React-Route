import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { OrderSummery } from "./components/OrderSummery";
import React from "react";
import { Nomatch } from "./components/Nomatch";
import { Products } from "./Products";
import { NewProducts } from "./components/NewProducts";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { AdminUser } from "./components/AdminUser";
const LazyAbout = React.lazy(() => import("./components/About"));
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="about"
          element={
            <React.Suspense fallback="Loding...">
              <LazyAbout />
            </React.Suspense>
          }
        />
        <Route path="order-summery" element={<OrderSummery />} />
        <Route path="*" element={<Nomatch />} />
        <Route path="product" element={<Products />}>
          <Route index element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
        </Route>
        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<AdminUser />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
