import "./style.css";
import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { login, signup } from './auth';

function SignUpPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    signup(username, password).then(() => history.push('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1>
      <label>
        username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <label>
        password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <button type="submit">Submit</button>
        <p>
            Already have an account? <Link to="/login"> Login</Link>
        </p>
    </form>
  );
}

export default SignUpPage;