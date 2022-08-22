import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { NavBar } from "./components/NavBar";
import "./App.css";
import { OrderSummery } from "./components/OrderSummery";
function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summery" element={<OrderSummery />} />
      </Routes>
    </>
  );
}

export default App;
