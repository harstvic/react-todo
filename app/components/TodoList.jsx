import React from 'react';
import Todo from 'Todo';

var TodoList = React.createClass({
  render: function() {
    var {todos} = this.props;

    var renderTodos = () => {
      if (!todos.length) {
        return (
          <p className="container__message">Nothing To Do. Add new Todo!</p>
        );
      }
      return todos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
          )
      })
    };

    return(
      <div>
        {renderTodos()}
      </div>
    );
  }
});

module.exports = TodoList;
