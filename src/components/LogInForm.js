import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LogInForm.scss';


// if no theme specified, dark (movie style) is used
const LoginForm = ({ theme = 'dark' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: call auth API, set error state, etc.
    console.log('logging in', { email, password });
  };

  return (
    <div className={`login-form-container theme-${theme}`}>
      <form onSubmit={handleSubmit}>
        <h2>Sign in</h2>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />

        <button type="submit">Log In</button>

        <div className="links">
          <Link to="/forgot-password">Forgot password?</Link>
          <span> | </span>
          <Link to="/signup">Sign up</Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;