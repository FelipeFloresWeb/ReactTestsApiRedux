import React, { useState, Redirect } from 'react';
import ApiUsers from '../api/apiUsers';

const Login = () => {
  const [user, setUser] = useState({ password: '', email: '' });
  const [nothaveUser, setNotHaveUser] = useState(false);
  const [haveUser, setHaveUser] = useState(false);

  const getUser = () => {
    const { currUser, message } = ApiUsers(user.email, user.password);

    if (message) {
      return setNotHaveUser(true);
    }

    const {
      password, email, userId, name,
    } = currUser;

    setUser({
      userId, password, email, name,
    });
    return setHaveUser(true);
  };

  return (
    <div>
      {haveUser ? (
        <Redirect to={{
          pathname: '/main',
          state: user,
        }}
        />
      ) : ''}
      <h2>Login</h2>
      <h4>{nothaveUser ? 'Usuário não encontrado' : ''}</h4>
      <label htmlFor="input-email">
        Email:
        <input
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          id="input-email"
          type="email"
        />
      </label>
      <br />
      <label htmlFor="input-password">
        Password:
        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          id="input-password"
          type="password"
        />
      </label>
      <button type="button" onClick={getUser}>Login</button>
    </div>
  );
};

export default Login;
