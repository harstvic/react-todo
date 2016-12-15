import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp';

import * as actions from 'actions';
import TodoAPI from 'TodoAPI';

var store = require('configureStore').configure();

store.subscribe(() => {
  var state = store.getState();
//  console.log('New state', state);
  TodoAPI.setTodos(state.todos);
});

var initialTodos = TodoAPI.getTodos();
store.dispatch(actions.addTodos(initialTodos));

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
