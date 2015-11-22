import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Mesa from './components/Mesa';

const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleWare(reducer, window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Mesa />
  </Provider>,
  document.getElementById('app')
);
