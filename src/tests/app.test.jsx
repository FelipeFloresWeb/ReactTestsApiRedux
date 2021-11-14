import React from 'react';
// import { BrowserRouter, Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';

import App from '../App';
import store from '../store';

describe('Testa se na página de login', () => {
  it('o caminho é /login', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });
});
