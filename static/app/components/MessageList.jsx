import React from 'react';
import Message from './Message';

export default function(props) {
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
