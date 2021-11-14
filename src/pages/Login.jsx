import React, { useCallback, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userApi, getUsers } from '../services/apiUsers';

const Login = () => {
  const [user, setUser] = useState({ password: '', email: '' });
  const [currUserState, setcurrUserState] = useState({});
  const [nothaveUser, setNotHaveUser] = useState(false);
  const [haveUser, setHaveUser] = useState(false);

  const dispatch = useDispatch();

  const getUser = () => {
    const { currUser, message } = getUsers(user.email, user.password);
    if (message) {
      setNotHaveUser(true);
      return setTimeout(() => {
        setNotHaveUser(false);
      }, 1500);
    }
    const {
      password, email, userId, name,
    } = currUser;
    setUser({
      userId, password, email, name,
    });
    return setHaveUser(true);
  };

  const setUserEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const testUserApi = async () => {
    const { data: { results } } = await userApi();

    setcurrUserState(results[0]);

    // const setUserState = useCallback(
    //   () => dispatch({ type: 'GET_USER_SUCESS' }),
    //   [dispatch],
    // );
  };
  const setUserState = useCallback(
    async () => dispatch({ type: 'GET_USER_SUCESS', payload: await userApi() }),
  );
  const getLogin = async () => {
    const results = await (await userApi());
    setcurrUserState(results);
    setUserState();
    return setHaveUser(true);
  };

  return (
    <div>
      {haveUser ? (
        <Navigate to={{
          pathname: '/main/',
          state: user,
        }}
        />
      ) : ''}
      <h2>Login</h2>
      <h4>{nothaveUser ? 'Usuário não encontrado' : ''}</h4>
      <label htmlFor="input-email">
        Email:
        <input
          onChange={setUserEmail}
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
      <button type="button" onClick={testUserApi}>Test Api Users</button>
      <button type="button" onClick={getLogin}>Send User to redux State</button>
    </div>
  );
};

export default Login;
