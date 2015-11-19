import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { setState, addMessage, updateMessage, deleteMessage } from '../actions';
import Form from './Form';
import MessageList from './MessageList';

const Mesa = React.createClass({
  handleDelete: function(message, e) {
    e.preventDefault();
    this.props.dispatch(deleteMessage(message));
    fetch(message.url, {method: 'DELETE'});
  },

  handleSubmit: function(message) {
    let newMessage = {
      uuid: uuid.v4(),
      text: message,
      created_at: new Date().toString()
    };
    this.props.dispatch(addMessage(newMessage));

    fetch('/api/statuses/', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newMessage)
    })
    .then(response => response.json())
    .then(data => this.props.dispatch(updateMessage(data)));
  },

  render: function() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <MessageList
          messages={this.props.messages}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
});

function select(state) {
  return {
    messages: state.messages
  }
}

export default connect(select)(Mesa);
