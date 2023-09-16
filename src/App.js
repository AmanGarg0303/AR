import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
