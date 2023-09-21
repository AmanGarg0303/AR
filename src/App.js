import "./App.css";
import "@google/model-viewer/dist/model-viewer.min.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleProductPage from "./pages/SingleProductPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PhoneCategories from "./components/PhoneCategories";
import PhoneSettings from "./components/PhoneSettings";
import AboutUs from "./pages/About";
import Cart from "./pages/Cart";
import MyOrders from "./pages/MyOrders";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/categories" element={<PhoneCategories />} />
          <Route path="/settings" element={<PhoneSettings />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/product/:id" element={<SingleProductPage />} />
        </Routes>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
