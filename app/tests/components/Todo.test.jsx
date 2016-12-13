import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jquery';

import Todo from 'Todo';

describe('Todo', () => {
  it('should exist', () => {
      expect(Todo).toExist();
  });

  describe('checkbox', () => {
    it('should call onToggle with id on click', () => {
      var todoData = {
        id: 199,
        text: 'Write todo.jsx test',
        completed: true
      };
      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoData} onToggle={spy}/>);
      var $el = $(ReactDOM.findDOMNode(todo));

      TestUtils.Simulate.click($el.find('input')[0]);

      expect(spy).toHaveBeenCalledWith(199);
    });
  });
});
