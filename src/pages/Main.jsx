import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { Navigate } from 'react-router';
import { setUserName } from '../actions/userActions';

const Main = () => {
  const globalState = useSelector((state) => state.userReducer);
  const { user } = globalState;
  const [formOn, setFormOn] = useState(false);
  const [currName, setCurrName] = useState(user.name.first);
  const [logout, setLogout] = useState(false);

  const dispatch = useDispatch();

  const setCurrUserName = useCallback(
    () => dispatch(setUserName(currName)),
  );

  const setNewUserName = () => {
    setCurrUserName();
    setFormOn(false);
  };

  const getLogout = () => {
    setLogout(true);
  };

  return (
    <>
      <button type="button" onClick={getLogout}>Logout</button>
      { logout ? (
        <Navigate to={{
          pathname: '/',
        }}
        />
      ) : '' }
      <h2>
        Bem vind
        { user.gender === 'female' ? 'a' : 'o' }
        :
        { `${user.name.title}. ${user.name.first} ${user.name.last}` }
      </h2>
      <img src={user.picture.medium} alt={user.name.first} />
      <h3>{`Celular: ${user.cell}`}</h3>
      <h3>{`Email: ${user.email}`}</h3>
      <h3>
        {`Regitrado válido até: ${user.registered.date.split('T')[0]} (${user.registered.age} anos).`}
      </h3>
      <button type="button" onClick={() => setFormOn(!formOn)}>Alterar Nome</button>
      {formOn
        ? (
          <>
            <input id="newName" onChange={(e) => setCurrName(e.target.value)} type="text" />
            <button type="button" onClick={setNewUserName}>Ok</button>
          </>
        )
        : ''}
    </>
  );
};

Main.propTypes = {
  user: PropTypes.object,
}.isRequired;

export default Main;
