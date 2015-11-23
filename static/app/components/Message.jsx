import React from 'react';
import moment from 'moment';

export default function({message, onDelete}) {
  return (
    <div className="message">
      <span className="text-muted"
        data-toggle="tooltip"
        data-delay="250"
        title={moment(message.created_at).format('D MMM YYYY hh:mm A')}
      >
        {moment(message.created_at).fromNow()}
      </span>
      <h2>{message.text}</h2>
      <a href="" onClick={onDelete.bind(null, message)}>Delete</a>
    </div>
  );
};
