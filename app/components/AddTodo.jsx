import React from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

export var AddTodo = React.createClass({
  handleSubmit: function (e) {
    e.preventDefault();
    var { dispatch } = this.props;
    var todoText = this.refs.todoText.value;

    if (todoText.length) {
      this.refs.todoText.value = '';
      dispatch(actions.startAddTodo(todoText));
    } else {
      this.refs.todoText.focus();
    }
  },
  render: function() {
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="what do you need to do"/>
          <button className="button expanded">Add Todo</button>
        </form>
      </div>
    );
  }
});

export default connect()(AddTodo);
