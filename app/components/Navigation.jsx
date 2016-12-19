import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { startLogout } from 'actions';
import { uuid } from 'node-uuid';

export let Navigation = React.createClass({
  handleLogin() {
    console.log('handleLogin!');
  },

  render() {
    let { dispatch, uid } = this.props;
    console.log(uid);

    let renderLogin = () => {
      if (uid) {
        return (
          <a href="#" onClick={() => dispatch(startLogout())} className="button alert callout-auth__button">Logout</a>
        );
      } else {
        return (
          <Link to="/login" onClick={this.handleLogin} className="button success callout-auth__button">Login</Link>
        );
      }
    };

    return (
      <header>
        <nav className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                <Link to="/">React Todo App</Link>
              </li>
            </ul>
          </div>
          <div className="top-bar-right">
            <div className="menu">
              <li>
                {renderLogin()}
              </li>
            </div>
          </div>
        </nav>
      </header>
    );
  }
});

export default connect(
  (state) => {
    return {
      uid: state.auth.uid
    }
  }
)(Navigation);
