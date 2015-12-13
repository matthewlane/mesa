import { expect } from 'chai';
import reducer from '../reducer';

describe('reducer', () => {

  it('handles SET_STATE', () => {
    const initialState = {};
    const action = {
      type: 'SET_STATE',
      state: [{
        uuid: "964074df-1ecb-4751-a16a-3be3095067de",
        text: "ok",
        created_at: "2015-11-13T01:29:13.189431Z"
      }]
    };
    const nextState = reducer(initialState, action);

    expect(nextState).to.deep.equal({
      messages: [{
        uuid: "964074df-1ecb-4751-a16a-3be3095067de",
        text: "ok",
        created_at: "2015-11-13T01:29:13.189431Z"
      }]
    });
  });

  it('stores new messages', () => {
    const state = {messages: []};
    const action = {
      type: 'ADD_MESSAGE',
      message: {
        uuid: "964074df-1ecb-4751-a16a-3be3095067de",
        text: "ok",
        created_at: "2015-11-13T01:29:13.189431Z"
      }
    };
    const nextState = reducer(state, action);

    expect(nextState.messages.length).to.equal(1);
    expect(nextState.messages[0]).to.equal(action.message);
  });

});
