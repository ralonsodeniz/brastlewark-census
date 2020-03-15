import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';

import serviceWorker from './serviceWorker';

import App from './components/App';
import AppHelmet from './components/Helmet';

ReactDom.render(
  <Provider store={store}>
    <Router>
      <AppHelmet />
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

serviceWorker();
