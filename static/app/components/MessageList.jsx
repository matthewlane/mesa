import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Message from './Message';

export default React.createClass({
  mixins: [PureRenderMixin],

  propTypes: {
    messages: React.PropTypes.arrayOf(React.PropTypes.shape({
      created_at: React.PropTypes.string,
      text: React.PropTypes.string
    })),
    onDelete: React.PropTypes.func.isRequired
  },

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
