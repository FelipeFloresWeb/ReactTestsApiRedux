import React, { useState } from 'react';

const Login = () => {
  const [data] = useState({ name: 'Felipe' });

  return (
    <div>
      <h2>Login</h2>
      <h3>{data.name}</h3>
    </div>
  );
};

export default Login;
