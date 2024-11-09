// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./style.scss"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">AgroInfoKG</h1>
        <div className="nav-links">
          <Link to="/">Главное</Link>
          <Link to="/catalog">Каталог растений</Link>
          <Link to="/ads">Объявления</Link>
          <Link to="/profile">Профиль</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
