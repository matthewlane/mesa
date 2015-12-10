import { expect } from 'chai';
import * as actions from '../actions';

describe('actions', () => {

  it('creates an action to add a message', () => {
    const message = 'falcon punch';
    const expectedAction = {
      type: actions.ADD_MESSAGE,
      message
    };
    expect(actions.addMessage(message)).to.deep.equal(expectedAction);
  });

});
