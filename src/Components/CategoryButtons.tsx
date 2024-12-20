import React from "react";
import "./CategoryButtons.css";

const CategoryButtons: React.FC = () => {
  return (
    <div className="category-buttons">
      <button className="btn">Vegetarian</button>
      <button className="btn">Vegan</button>
      <button className="btn">Pescatarian</button>
    </div>
  );
};

export default CategoryButtons;
