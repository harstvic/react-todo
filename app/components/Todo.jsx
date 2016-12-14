import React from 'react';
import moment from 'moment';

var Todo = React.createClass({
  handleClick: function() {
    var {id} = this.props;
    this.props.onToggle(id);
  },
  render: function () {
    var {completed, id, text, createdAt, completedAt} = this.props;
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
      <div>
          <input type="checkbox" defaultChecked={completed} onClick={this.handleClick}/>
          <p>{text}</p>
          <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
