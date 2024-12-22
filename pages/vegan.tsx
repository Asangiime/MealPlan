import React from 'react';
import './vegan.css';

const Vegan = () => {
  const recipes = [
    { id: 1, name: "Vegan Pasta" },
    { id: 2, name: "Grilled Sandwich" },
    { id: 3, name: "Vegetable Stir Fry" },
  ];

  return (
    <div className="vegetarian">
      <h2>Vegetarian Recipes</h2>
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>{recipe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Vegetarian;