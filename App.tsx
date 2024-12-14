// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Index';
import Footer from './components/Footer/Index';
import Home from './pages/Home';
import MealCard from './components/MealCard';

const App: React.FC = () => {
  return (
    <Routes>
      <Header />
      <main>
      <Routes>
  <Route path="/" element={<Home />} />
</Routes>
      </main>
      <Footer />
    </Routes>
  );
}

export default App;
