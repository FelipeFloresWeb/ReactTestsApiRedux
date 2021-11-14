import React, { useCallback, useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userApi, getUsers } from '../services/apiUsers';
import { getUserSucess, resetUser } from '../actions/userActions';

const Login = () => {
  const [user, setUser] = useState({ password: '', email: '' });
  const [nothaveUser, setNotHaveUser] = useState(false);
  const [haveUser, setHaveUser] = useState(false);
  const [haveUserApi, setHaveUserApi] = useState(false);

  const dispatch = useDispatch();

  const getUser = () => {
    const { currUser, message } = getUsers(user.email, user.password);
    if (message) {
      setNotHaveUser(true);
      return setTimeout(() => {
        setNotHaveUser(false);
      }, 1500);
    }
    setHaveUserApi(true);
    const {
      password, email, userId, name,
    } = currUser;
    setUser({
      userId, password, email, name,
    });
    return setTimeout(() => {
      setHaveUserApi(false);
    }, 1500);
  };

  const setUserEmail = (e) => {
    setUser({ ...user, email: e.target.value });
  };

  const setUserState = useCallback(
    async () => dispatch(getUserSucess(await userApi())),
  );

  const getLogin = async () => {
    await setUserState();
    return setHaveUser(true);
  };

  const resetuser = useCallback(
    async () => dispatch(resetUser()),
  );

  useEffect(() => {
    resetuser();
  }, []);

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
      { haveUserApi ? <h2>Usuário encontrado!</h2> : ''}
      {nothaveUser ? <h2>Usuário não encontrado</h2> : ''}
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
      <br />
      <button type="button" onClick={getUser}>Login</button>
      <button type="button" onClick={getLogin}>Send User to redux State</button>
    </div>
  );
};

export default Login;
