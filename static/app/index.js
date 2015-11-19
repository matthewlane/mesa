import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Mesa from './components/Mesa';

let store = createStore(reducer, window.INITIAL_STATE);

ReactDOM.render(
  <Provider store={store}>
    <Mesa />
  </Provider>,
  document.getElementById('app')
);
