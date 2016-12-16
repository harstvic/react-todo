import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

export var configure = (initialState = {} ) => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = createStore(reducer, initialState, composeWithDevTools(
    applyMiddleware(thunk))
  );

  return store;
};
