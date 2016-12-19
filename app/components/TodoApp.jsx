import React from 'react';
import { connect } from 'react-redux';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';
import { startLogout } from 'actions';

export var TodoApp = React.createClass({
  render() {
    return (
      <div>
        <div className="page-action">
          
        </div>
        <div className="row">
          <div className="column small-centered small-11 medium-6 large-5">
            <div className="container">
              <TodoSearch/>
              <TodoList/>
              <AddTodo/>
            </div>
          </div>
        </div>
      </div>
    )
  }
});

export default connect()(TodoApp);
