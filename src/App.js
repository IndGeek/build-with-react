import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Model from "./pages/model";
import Slider from './pages/slider';
import Carousel from './pages/carousel';
import Home from './pages/home';
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/model" element={<Model />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}