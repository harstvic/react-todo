import React from 'react';
import Navigation from 'Navigation';

export default class is extends React.Component {
  render() {
    return (
      <div className="master-page">
        <Navigation/>
        { this.props.children }
      </div>
    );
  }
}
