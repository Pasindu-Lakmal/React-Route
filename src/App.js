import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { Abouth } from "./components/Abouth";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/abouth" element={<Abouth />} />
    </Routes>
  );
}

export default App;
