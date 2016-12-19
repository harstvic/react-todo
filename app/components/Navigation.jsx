import React from 'react';
import { Link, IndexLink } from 'react-router';

export let Navigation = React.createClass({
  render() {
    return (
      <header>
        <nav className="top-bar">
          <div className="top-bar-left">
            <ul className="menu">
              <li className="menu-text">
                React Todo App
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
});

export default Navigation;
