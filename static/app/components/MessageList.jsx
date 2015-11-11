var React = require('react');
var Message = require('./Message');

var MessageList = function(props) {
  return <div>{props.messages.map(createMessage)}</div>;
  function createMessage(message) {
    return (
      <Message
        key={message.uuid}
        message={message}
        onDelete={props.onDelete}
      />
    );
  }
};

module.exports = MessageList;
