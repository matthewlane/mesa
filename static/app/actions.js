import fetch from  'isomorphic-fetch';

export const SET_STATE = 'SET_STATE';
export const ADD_MESSAGE = 'ADD_MESSAGE';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';

export function setState(state) {
  return {
    type: SET_STATE,
    state
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    message
  };
}

export function updateMessage(message) {
  return {
    type: UPDATE_MESSAGE,
    message
  };
}

export function postMessage(message) {
  return function(dispatch) {
    dispatch(addMessage(message));
    return fetch('/api/statuses/', {
        method: 'POST',
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(message)
      })
      .then(response => response.json())
      .then(json => dispatch(updateMessage(json)));
  }
}

export function deleteMessage(message) {
  return {
    type: DELETE_MESSAGE,
    message
  };
}

export function requestDelete(message) {
  return function (dispatch) {
    dispatch(deleteMessage(message));
    return fetch(message.url, {method: 'DELETE'});
  }
}
