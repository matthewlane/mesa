import { expect } from 'chai';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import { Mesa } from '../components/Mesa';
import Form from '../components/Form';
import MessageList from '../components/MessageList';

describe('Mesa', () => {
  let output;

  before(() => {
    let renderer = TestUtils.createRenderer();
    renderer.render(<Mesa />);
    output = renderer.getRenderOutput();
  });

  it('renders correctly', () => {
    expect(output.type).to.equal('div');

    let [ form, messageList ] = output.props.children;

    expect(form.type).to.equal(Form);
    expect(messageList.type).to.equal(MessageList);
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
