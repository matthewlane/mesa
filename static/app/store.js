import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';

const createStoreWithMiddleWare = applyMiddleware(
  thunk
)(createStore);

export default function configureStore(initialState) {
  return createStoreWithMiddleWare(reducer, initialState);
}
