import React, { useState } from 'react';
import GitHubLogin from './GitHubLogin';
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="logo">
          <h1>Bytebase</h1>
        </div>
        
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
            />
          </div>
          
          <button type="submit" className="login-button">
            Sign In
          </button>
        </form>
        
        <div className="divider">
          <span>OR</span>
        </div>
        
        <GitHubLogin />
        
        <div className="footer-links">
          <a href="/forgot-password">Forgot password?</a>
          <a href="/signup">Create an account</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
