import React from 'react';
import ReactDOM from 'react-dom';
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
import TodoApp from 'TodoApp';

// Load Foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <TodoApp/>,
  document.getElementById('app')
);
