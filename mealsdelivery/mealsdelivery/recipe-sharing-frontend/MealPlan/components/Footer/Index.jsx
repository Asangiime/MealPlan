// src/components/Footer/Index.tsx
import React from 'react';

const Footer= () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; 2024 Meal Delivery Service. All rights reserved.</p>
      <p>Follow us on:
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={linkStyle}> Facebook</a> |
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={linkStyle}> Twitter</a> |
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={linkStyle}> Instagram</a>
      </p>
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: '#fff',
  padding: '20px',
  textAlign: 'center',
};

const linkStyle = {
  color: '#61DAFB',
  textDecoration: 'none',
};

export default Footer;
