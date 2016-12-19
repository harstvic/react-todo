import React from 'react';
import { connect } from 'react-redux';
import Todo from 'Todo';
import TodoAPI from 'TodoAPI';

export var TodoList = React.createClass({
  render: function() {
    var state = this.props;
    var { searchText, showCompleted, todos } = this.props;

    var renderTodos = () => {
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
      console.log(filteredTodos);
      if (filteredTodos.length === 0) {
        return (
          <p className="container__message">Nothing To Do. Add new Todo!</p>
        );
      }
      return filteredTodos.map((todo) => {
        return (
          <Todo key={todo.id} {...todo}/>
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

export default connect(
  (state) => state
)(TodoList);
