var React = require('react');

var Message = function(props) {
  return (
    <div className="message">
      <span className="text-muted">{props.message.created_at}</span>
      <h2>{props.message.text}</h2>
      <a href="" onClick={props.onDelete.bind(null, props.message)}>Delete</a>
    </div>
  );
};

module.exports = Message;
