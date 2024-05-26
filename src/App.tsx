// import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game";
import { Navbar } from "./components";
import { Home } from "./pages/Home";
import { Simulation } from "./pages/Simulation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/simulation" element={<Simulation />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
