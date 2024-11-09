// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PlantsCatalog from "./pages/Plants/PlantsCatalog";
import Ads from "./pages/Ads/Ads";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/Navbar/navbar";
import Home from "./pages/Home/Home";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ padding: "80px 0" }} className="">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<PlantsCatalog />} />
          <Route path="/ads" element={<Ads />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
