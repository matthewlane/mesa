import React from 'react';
import Message from './Message';

export default React.createClass({
  render: function() {
    return <div>{this.props.messages.map(createMessage, this)}</div>;
    function createMessage(message) {
      return (
        <Message
          key={message.uuid}
          message={message}
          onDelete={this.props.onDelete}
        />
      );
    }
  }
});
