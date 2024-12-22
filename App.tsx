import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Vegetarian from './pages/Vegetarian';
import Vegan from './ages/Vegan';
import Pescatarian from './ages/Pescatarian';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/vegetarian" element={<Vegetarian />} />
        <Route path="/vegan" element={<Vegan />} />
        <Route path="/pescatarian" element={<Pescatarian />} />
      </Routes>
    </Router>
  );
};

export default App;