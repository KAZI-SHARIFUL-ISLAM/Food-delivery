import "./style.css";
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { login, signup } from './auth';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    login(username, password).then(() => history.push('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <label>
        username:
        <input
          type="text"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
      <p>
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </form>
  );
}

export default LoginPage;