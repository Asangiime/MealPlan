import React, { Component } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import CategoryButtons from "./Components/CategoryButtons";
import AuthButtons from "./Components/AuthButtons";
import LoginPage from "./Pages/LoginPage";
import Signup from "./Pages/SignupPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (

<div className="app-container">
      <Navbar />
      <div className="main-content">
        <h1>Wellness begins with every bite.</h1>
        <SearchBar />
        <CategoryButtons />
        <AuthButtons />
        <Router>
<Routes>
  <Route path="/" element={<Component />} />
  <Route path="/LoginPage" element={<LoginPage />} />
  <Route path="/SignupPage" element={<Signup />} />
</Routes>
</Router>
      </div>
      <footer className="footer">© 2024 Meal Planner. All rights reserved.</footer>
    </div>


  );

  
};

export default App;
