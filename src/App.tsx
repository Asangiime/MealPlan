import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './component/Header';
import Footer from './component/Footer';
import './index.css';
import Vegan from './pages/vegan';
import Vegetarian from './pages/vegetarian';
import Pescatarian from './pages/pescatarian';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <main>
          <h1>Meal Planner</h1>
          <p>Select your preferred meal type:</p>
          <ul>
            <li><Link to="/vegan">Vegan</Link></li>
            <li><Link to="/vegetarian">Vegetarian</Link></li>
            <li><Link to="/pescatarian">Pescatarian</Link></li>
          </ul>

          <Routes>
            <Route path="/vegan" element={<Vegan />} />
            <Route path="/vegetarian" element={<Vegetarian />} />
            <Route path="/pescatarian" element={<Pescatarian />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
