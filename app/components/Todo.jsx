import React from 'react';

var Todo = React.createClass({
  handleClick: function() {
    var {id} = this.props;
    this.props.onToggle(id);
  },
  render: function () {

    var {completed, id, text} = this.props;
    return (
      <div>
          <input type="checkbox" defaultChecked={completed} onClick={this.handleClick}/>
            {text}
      </div>
    );
  }
});

module.exports = Todo;
