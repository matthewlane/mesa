import { SET_STATE, ADD_MESSAGE, DELETE_MESSAGE } from './actions';

export default function(state = {messages: []}, action) {
  switch (action.type) {
  case SET_STATE:
    return Object.assign({}, action.state);

  case ADD_MESSAGE:
    return Object.assign({}, state, {
      messages: [
        action.message,
        ...state.messages
      ]
    });

  case DELETE_MESSAGE:
    return Object.assign({}, state, {
      messages: state.messages
        .filter(candidate => candidate.uuid !== action.message.uuid)
    });

  default:
    return state;
  }
}
