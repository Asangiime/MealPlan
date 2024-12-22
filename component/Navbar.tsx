
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Meal Plan </h1>
      <ul>
        <li><Link to="/LogIn">Log In</Link></li>
        <li><Link to="/SignUp">Sign Up</Link></li>
        <li><Link to="/vegetarian">Vegetarian</Link></li>
        <li><Link to="/vegan">Vegan</Link></li>
        <li><Link to="/pescatarian">Pescatarian</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;