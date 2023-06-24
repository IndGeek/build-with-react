import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Modal from "./pages/Modal";
import Slider from './pages/slider';
import Carousel from './pages/carousel';
import Home from './pages/home';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Modal" element={<Modal />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}