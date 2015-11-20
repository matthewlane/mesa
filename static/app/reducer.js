import {
  SET_STATE, ADD_MESSAGE, UPDATE_MESSAGE, DELETE_MESSAGE
} from './actions';

export default function(state = {messages: []}, action) {
  switch (action.type) {
  case SET_STATE:
    return {messages: action.state};

  case ADD_MESSAGE:
    return {messages: [action.message, ...state.messages]};

  case UPDATE_MESSAGE:
    const messages = state.messages.map(message => {
        if (message.uuid === action.message.uuid) {
          return Object.assign({}, message, {
            id: action.message.id,
            url: action.message.url
          });
        }
        return candidate;
    });
    return {messages};

  case DELETE_MESSAGE:
    return {
      messages: state.messages.filter(
        message => message.uuid !== action.message.uuid
      )
    };

  default:
    return state;
  }
}
