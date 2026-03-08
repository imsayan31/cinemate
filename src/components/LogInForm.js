import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/LogInForm.scss';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../features/auth/authSlice';
import { showSuccessMessage } from '../features/message/messageSlice';


// if no theme specified, dark (movie style) is used
const LoginForm = ({ theme = 'dark' }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const randomId = Math.floor(Math.random() * 10) + 1;
  const authDispatch = useDispatch();
  const messageDispatch = useDispatch();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = await fetch('https://fooapi.com/api/users/' + randomId);
    const userDataJson = await userData.json();
    if(userDataJson.data) {
      authDispatch(loginSuccess({user: userDataJson.data, token: randomId, isAuthenticated: true}));
      messageDispatch(showSuccessMessage('Logged in successfully!'));
    }
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