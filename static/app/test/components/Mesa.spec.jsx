import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Provider } from 'react-redux';
import configureStore from '../../store';
import App, { Mesa } from '../../components/Mesa';
import Form from '../../components/Form';
import MessageList from '../../components/MessageList';

function setup(initialState) {
  const store = configureStore(initialState);
  const app = TestUtils.renderIntoDocument(
    <Provider store={store}>
      <App />
    </Provider>
  );

  return {
    app,
    form: TestUtils.findRenderedDOMComponentWithTag(app, 'form'),
    textBox: TestUtils.findRenderedDOMComponentWithTag(app, 'input')
  }
}

describe('<Mesa />', () => {

  it('renders correctly', () => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Mesa />);
    let output = renderer.getRenderOutput();
    expect(output.type).to.equal('div');

    let [ form, messageList ] = output.props.children;

    expect(form.type).to.equal(Form);
    expect(messageList.type).to.equal(MessageList);
  });

  it('displays text on page that was submitted into form', () => {
    const { app, form, textBox } = setup();

    textBox.value = 'zebra';
    TestUtils.Simulate.submit(form);

    const messages = TestUtils.scryRenderedDOMComponentsWithClass(app, 'message');
    expect(messages.length).to.equal(1);
    expect(messages[0].textContent).to.contain('zebra');
  });

  it('removes messages that were deleted', () => {
    const initialState = {messages: [{uuid: '1', text: 'zebra'}]};
    const { app } = setup(initialState);

    const deleteLink = TestUtils.findRenderedDOMComponentWithTag(app, 'a');
    TestUtils.Simulate.click(deleteLink);

    const messages = TestUtils.scryRenderedDOMComponentsWithClass(app, 'message');
    expect(messages.length).to.equal(0);
  });

});
