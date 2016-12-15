import {combineReducers, createStore, compose} from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';

export var configure = () => {
  var reducer = combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = createStore(reducer, compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

  return store;
};
