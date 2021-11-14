import React, {
  useCallback, useEffect, useState,
} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

const Main = () => {
  const { user } = useSelector((state) => state.userReducer);

  const [formOn, setFormOn] = useState(false);
  const [nameChange, setnameChange] = useState(false);
  const [currName, setCurrName] = useState(user.name.first);

  const dispatch = useDispatch();

  const setUserName = useCallback(
    () => dispatch({ type: 'SET_USER_NAME', payload: currName }),
  );

  const setNewUserName = () => {
    setUserName();
  };

  useEffect(() => {
    setnameChange(true);
    setUserName();
    setnameChange(false);
  }, []);

  return (
    <>
      <h2>
        Bem vind
        { user.gender === 'female' ? 'a' : 'o' }
        :
        { ` ${nameChange ? 'wait' : user.name.title}. ${user.name.first} ${user.name.last}` }
      </h2>
      <img src={user.picture.medium} alt={user.name.first} />
      <h3>
        Celular:
        {' '}
        {user.cell}
      </h3>
      <h3>
        Email:
        {' '}
        {user.email}
      </h3>
      <h3>
        {`Regitrado válido até: ${user.registered.date.split('T')[0]} (${user.registered.age} anos).`}
      </h3>
      <button type="button" onClick={() => setFormOn(!formOn)}>Alterar Nome</button>
      {formOn
        ? (
          <>
            <input id="newName" onChange={(e) => setCurrName(e.target.value)} type="text" />
            <button type="button" onClick={setNewUserName}>Alterar Nome</button>
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
