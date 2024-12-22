import React, { useState } from 'react';
import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <label>
          Confirm Password:
          <input type="password" placeholder="Confirm your password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUp;
