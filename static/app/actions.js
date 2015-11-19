export const SET_STATE = 'SET_STATE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export function setState(state) {
  return {
    type: SET_STATE,
    state
  }
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  };
}

export function deleteMessage(message) {
  return {
    type: DELETE_MESSAGE,
    message
  }
}
