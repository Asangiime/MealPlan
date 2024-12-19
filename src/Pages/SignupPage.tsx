import React from "react";
import "./SignupPage.css";
import { Link } from "react-router-dom";

const Signup: React.FC = () => {
  return (
    <div className="signup-container">
      <div className="signup-form">
        <h2>Customer Sign-Up</h2>

        <div className="form-group">
          <label>Full Name:</label>
          <input type="text" placeholder="Enter your full name" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" placeholder="Re-enter your password" />
        </div>

        <button className="signup-btn">Sign Up</button>

        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Log In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
