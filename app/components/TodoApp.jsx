import React from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

var TodoApp = React.createClass({
  getInitialState: function() {
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        }, {
          id: 2,
          text: 'Clean the yard'
        }, {
          id: 3,
          text: 'Learn React'
        }, {
          id: 4,
          text: 'Make test'
        }
      ]
    }
  },
  handleAddTodo: function(newTodo) {
    alert('new todo: ' + newTodo);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <h1>Todo App</h1>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    )
  }
});

module.exports = TodoApp;
