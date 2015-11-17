import React from 'react';

export default function({message, onDelete}) {
  return (
    <div className="message">
      <span className="text-muted">{message.created_at}</span>
      <h2>{message.text}</h2>
      <a href="" onClick={onDelete.bind(null, message)}>Delete</a>
    </div>
  );
};
