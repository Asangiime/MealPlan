import React from "react";
import "./AuthButtons.css";
import { Link } from "react-router-dom";

const AuthButtons: React.FC = () => {
  return (
    <div className="auth-buttons">
        <Link to="/login"><button className="auth-btn">Log In</button></Link>
        <Link to="/signup"><button className="auth-btn">Sign Up</button></Link>
      
    </div>
  );
};

export default AuthButtons;
