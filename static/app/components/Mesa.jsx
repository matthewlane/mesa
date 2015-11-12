import React from 'react';
import uuid from 'uuid';
import Form from './Form';
import MessageList from './MessageList';

export default React.createClass({
  getInitialState: function() {
    return {messages: []};
  },

  componentDidMount: function() {
    fetch('/api/statuses/')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      if (this.isMounted()) {
        this.setState({messages: data});
      }
    }.bind(this))
    .catch(function(error) {
      console.error('Request failed ', error);
    });
  },

  handleDelete: function(message, e) {
    e.preventDefault();

    let newMessages = this.state.messages
      .filter(candidate => candidate.uuid !== message.uuid);
    this.setState({messages: newMessages});

    if (message.url) {
      fetch(message.url, {method: 'DELETE'});
    }
  },

  handleSubmit: function(message) {
    let newMessage = {
      uuid: uuid.v4(),
      text: message,
      created_at: new Date().toString()
    };
    let newMessages = [newMessage, ...this.state.messages];
    this.setState({messages: newMessages});

    fetch('/api/statuses/', {
      method: 'POST',
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(newMessage)
    });
  },

  render: function() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit} />
        <MessageList
          messages={this.state.messages}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
});
