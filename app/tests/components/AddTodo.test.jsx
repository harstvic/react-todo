import React from 'react';
import { findDOMNode } from 'react-dom';
import { Simulate, renderIntoDocument } from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import { AddTodo } from 'AddTodo';

describe('AddTodo', () => {
  it('should exist', () => {
    expect(AddTodo).toExist();
  });

  it('should dispatch ADD_TO when valid todo text', () => {
    var todoText = 'Check mail';
    var action = {
      type: 'ADD_TODO',
      text: todoText
    };
    var spy = expect.createSpy();
    var addTodo = renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    Simulate.submit($el.find('form')[0]);

    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch ADD_TODO with invalid input', () => {
    var todoText = '';
    var spy = expect.createSpy();
    var addTodo = renderIntoDocument(<AddTodo dispatch={spy}/>);
    var $el = $(findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    Simulate.submit($el.find('form')[0]);

    expect(spy).toNotHaveBeenCalled();
  });
});
