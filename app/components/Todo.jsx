import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
  handleClick: function() {
    var {id} = this.props;
    this.props.onToggle(id);
  },
  render: function () {
    var {completed, id, text, createdAt, completedAt} = this.props;
    var todoClassName = completed ? 'todo todo-completed' : 'todo';
    var renderDate = () => {
      var message = 'Created ';
      var timestamp = createdAt;

      if (completed) {
        message = 'Completed ';
        timestamp = completedAt;
      }

      return message + moment.unix(timestamp).format('MMM Do YYYY @ HH:mm');
    };

    return (
      <div className={todoClassName} onClick={this.handleClick}>
        <div>
          <input type="checkbox" checked={completed} />
        </div>
        <div>
          <p>{text}</p>
          <p className="todo__subtext">{renderDate()}</p>
        </div>
      </div>
    );
  }
});

module.exports = Todo;
