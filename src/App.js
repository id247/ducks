import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import store from './state/store';

import { routes, mapRoutes } from './routes';

const history = createBrowserHistory();

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter history={history}>{mapRoutes(routes)}</BrowserRouter>
    </Provider>
  );
}
