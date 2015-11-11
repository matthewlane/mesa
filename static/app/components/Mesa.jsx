import React from 'react';
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

    var newMessages = this.state.messages.filter(function(candidate) {
      return candidate.uuid !== message.uuid;
    });
    this.setState({messages: newMessages});

    if (message.url) {
      fetch(message.url, {method: 'DELETE'});
    }
  },

  uuid: function () {
    var i, random;
    var uuid = '';

    for (i = 0; i < 32; i++) {
      random = Math.random() * 16 | 0;
      if (i === 8 || i === 12 || i === 16 || i === 20) {
        uuid += '-';
      }
      uuid += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random))
        .toString(16);
    }

    return uuid;
  },

  handleSubmit: function(message) {
    var newMessage = {
      uuid: this.uuid(),
      text: message || (100 * Math.random()).toString(),
      created_at: new Date().toString()
    };
    var newMessages = [newMessage].concat(this.state.messages);
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
