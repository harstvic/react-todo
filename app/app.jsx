import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp';

import { configure } from 'configureStore';
import * as actions from 'actions';
import TodoAPI from 'TodoAPI';
var store = configure();

store.dispatch(actions.startAddTodos());

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
