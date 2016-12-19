import React from 'react';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';
import MasterPage from 'MasterPage';
import TodoApp from 'TodoApp';
import Login from 'Login';
import firebase from 'app/firebase';

var requireLogin = (nextStat, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLogin = (nextStat, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path="/" component={MasterPage}>
      <Route path="todos" component={TodoApp} onEnter={requireLogin}/>
      <IndexRoute component={Login} onEnter={redirectIfLogin}/>
    </Route>
  </Router>
);
