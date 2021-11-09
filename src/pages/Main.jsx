import React from 'react';
import PropTypes from 'prop-types';

const Main = (props) => {
  const { location: { state: { user } } } = props;
  return (
    <h2>
      Bem vindo
      {user.name}
    </h2>
  );
};

Main.propTypes = {
  user: PropTypes.object,
}.isRequired;

export default Main;
