var React = require('react');

var Form = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    if (!this.refs.text.value) {return;}
    this.props.onSubmit(this.refs.text.value);
    this.refs.text.value = '';
  },

  render: function() {
    return (
      <form
        onSubmit={this.handleSubmit}
        className="form"
      >
        <input
          type="text"
          ref="text"
          className="form-control"
          placeholder="Type something then press enter"
          autoFocus
        />
        <br />
      </form>
    );
  }
});

module.exports = Form;
