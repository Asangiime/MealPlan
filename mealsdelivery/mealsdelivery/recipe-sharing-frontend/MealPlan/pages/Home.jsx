// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import MealCard from '../components/MealCard';



const Home= () => {
  const [meals, setMeals] = useState<Meal>([]);

  useEffect(() => {
    // Fetch the meals data from the backend API
    axios.get('/api/meals') // Adjust the API URL as needed
      .then((response) => {
        setMeals(response.data);
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
      });
  }, []);

  return (
    <div style={homeStyle}>
      <h1>Welcome to Meal Delivery Service</h1>
      <div style={mealCardsStyle}>
        {meals.map((meal) => (
          <MealCard key={meal.id} meal={meal} />
        ))}
      </div>
    </div>
  );
};

const homeStyle = {
  textAlign: 'center',
  padding: '20px',
};

const mealCardsStyle= {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
  gap: '20px',
};

export default Home;
