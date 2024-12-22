import React from 'react';
import './pescatarian.css';

const Pescatarian = () => {
  const recipes = [
    { id: 1, name: " Pasta" },
    { id: 2, name: " Sandwich" },
    { id: 3, name: "Vegetable Stir Fry" },
  ];

  return (
    <div className="pescatarian">
      <h2>pescatarian Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Pescatarian;