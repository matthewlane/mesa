import React from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid';
import { postMessage, requestDelete } from '../actions';
import Form from './Form';
import MessageList from './MessageList';

export const Mesa = React.createClass({
  handleDelete: function(message, e) {
    e.preventDefault();
    this.props.dispatch(requestDelete(message));
  },

  handleSubmit: function(message) {
    this.props.dispatch(postMessage({
      uuid: uuid.v4(),
      text: message,
      created_at: new Date().toJSON()
    }));
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

function mapStateToProps(state) {
  return {
    messages: state.messages
  }
}

export default connect(mapStateToProps)(Mesa);
