import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { renderIntoDocument, scryRenderedComponentsWithType } from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { configure } from 'configureStore';
import TodoApp from 'TodoApp';
import TodoList from 'TodoList';

describe('TodoApp', () => {
  it('should exist', () => {
      expect(TodoApp).toExist();
  });

  it('should render TodoList', () => {
    var store = configure();
    var provider = renderIntoDocument(
      <Provider store={store}>
        <TodoApp/>
      </Provider>
    );

    var todoApp = scryRenderedComponentsWithType(provider, TodoApp)[0];
    var todoList = scryRenderedComponentsWithType(todoApp, TodoList);

    expect(todoList.length).toEqual(1);
  });
});
