import React from "react";
import "./LoginPage.css";
import { Link } from "react-router-dom";

const LoginPage: React.FC = () => {
  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Customer Log In</h2>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button type="submit" className="login-button">Log In</button>

        <p className="signup-link">
          Don't have an account? <a href="/signup">Sign Up</a>
        </p>

        <Link to="/" className="back-home">
          ← Back to Home
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
