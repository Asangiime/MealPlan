import React from 'react';
import { Link } from 'react-router-dom'; // Import Link if using React Router

const Header : React.FC = () => {
  return (
    <header>
      <h1>Meal Planner</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">Meals</Link></li>
          <li><Link to="/">Recipe</Link></li>
          <li><Link to="/">Sign In</Link></li>
         
        </ul>
      </nav>
    </header>
  );
};

export default Header;