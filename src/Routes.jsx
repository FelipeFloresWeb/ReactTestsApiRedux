import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Login from './pages/Login';
import Main from './pages/Main';

const MainRoutes = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/main" element={<Main />} />
  </Routes>
);

export default MainRoutes;
