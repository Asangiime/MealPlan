// src/components/MealCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const MealCard= ({ meal }) => {
  return (
    <div style={cardStyle}>
      <img src={meal.image} alt={meal.name} style={imageStyle} />
      <h3>{meal.name}</h3>
      <p>{meal.description}</p>
      <p><strong>Price: ${meal.price}</strong></p>
      <Link to={`/meal/${meal.id}`} style={linkStyle}>View Details</Link>
    </div>
  );
};

const cardStyle = {
  border: '1px solid #ccc',
  padding: '10px',
  borderRadius: '8px',
  textAlign: 'center',
};

const imageStyle = {
  width: '100%',
  height: '200px',
  objectFit: 'cover',
  borderRadius: '8px',
};

const linkStyle = {
  textDecoration: 'none',
  color: '#61DAFB',
};

export default MealCard;
