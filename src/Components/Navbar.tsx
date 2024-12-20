import React from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="logo">Meal Planner</div>
      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Recipes</a>
      </div>
    </nav>
  );
};

export default Navbar;
