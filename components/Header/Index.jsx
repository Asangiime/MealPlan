// src/components/Header/Index.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/react.svg'; // Import the React logo

const Header= () => {
  return (
    <header style={headerStyle}>
      <div style={logoStyle}>
        <img src={logo} alt="React Logo" width="50" height="50" />
        <h1>Meal Delivery Service</h1>
      </div>
      <nav>
        <ul style={navListStyle}>
          <li style={navItemStyle}><Link to="/">Home</Link></li>
          <li style={navItemStyle}><Link to="/order">Order Now</Link></li>
          <li style={navItemStyle}><Link to="/reviews">Reviews</Link></li>
        </ul>
      </nav>
    </header>
  );
};

const headerStyle= {
  backgroundColor: '#61DAFB',
  padding: '10px 0',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const logoStyle= {
  display: 'flex',
  alignItems: 'center',
};

const navListStyle= {
  display: 'flex',
  listStyleType: 'none',
  margin: '0',
};

const navItemStyle = {
  margin: '0 15px',
};

export default Header;
