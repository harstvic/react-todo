import React, { createKey } from 'react';
import Navigation from 'Navigation';
import Footer from 'Footer';

export default class is extends React.Component {
  render() {
    return (
      <div className="master-page">
        <Navigation/>
        { this.props.children }
        <Footer/>
      </div>
    );
  }
}
