import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from '../../reducer';
import App, { Mesa } from '../../components/Mesa';
import Form from '../../components/Form';
import MessageList from '../../components/MessageList';

function setup(initialState) {
  const createStoreWithMiddleWare = applyMiddleware(thunk)(createStore);
  const store = createStoreWithMiddleWare(reducer, initialState);
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

describe('MessageList', () => {

  it('displays a list of messages', () => {
    const messages = [{
      id: 41,
      uuid: "964074df-1ecb-4751-a16a-3be3095067de",
      url: "http://localhost:8000/api/statuses/41/",
      text: "ok",
      created_at: "2015-11-13T01:29:13.189431Z"
    }];
    const component = TestUtils.renderIntoDocument(
      <MessageList
        messages={messages}
        onDelete={() => true}
      />
    );

    const entries = TestUtils.scryRenderedDOMComponentsWithClass(
      component, 'message'
    );
    const renderedComponent = entries[0];

    expect(entries.length).to.equal(1);
    expect(renderedComponent).to.exist;
    expect(renderedComponent.textContent).to.contain('ok');
  });

});
