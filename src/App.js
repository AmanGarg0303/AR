import "./App.css";
// import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";

function App() {
  const modelViewer = {
    backgroundColor: "#eee",
    overflowX: "hidden",
    posterColor: "#eee",
    width: 300,
    height: 300,
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="flex justify-center">
          <model-viewer
            className="modelviewer"
            style={modelViewer}
            src={
              "https://res.cloudinary.com/dzh0wkv97/image/upload/v1695231913/AR%20glbs/SLZ_2_ubbyf5.glb"
            }
            alt="Model"
            ar
            ar-modes="webxr scene-viewer quick-look"
            // auto-rotate
            camera-controls
            touch-action="pan-y"
            shadow-intensity="1"
            poster={
              "https://res.cloudinary.com/dzh0wkv97/image/upload/v1695231965/AR%20glbs/Mercedes_pbnqau.png"
            }
          ></model-viewer>
          <h1>CAR</h1>
        </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
