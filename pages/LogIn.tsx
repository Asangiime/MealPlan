import React, { useState } from 'react';
import AuthButton from '../component/AuthButtons';

const LogIn = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      alert('Logged in successfully!');
      setLoading(false);
    }, 2000); // Simulate a 2-second delay
  };

  return (
    <div>
      <h2>Log In</h2>
      <form>
        <label>
          Email:
          <input type="email" placeholder="Enter your email" />
        </label>
        <label>
          Password:
          <input type="password" placeholder="Enter your password" />
        </label>
        <AuthButton
          label={loading ? 'Logging in...' : 'Log In'}
          onClick={handleLogin}
          disabled={loading}
        />
      </form>
    </div>
  );
};

export default LogIn;