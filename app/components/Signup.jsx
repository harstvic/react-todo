import React from 'react';

export let Signup = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    console.log('handleSubmit');
  },

  render () {
    return (
      <div className="row">
        <div className="columns small-centered small-10 medium-7 large-5">
          <div className="callout callout-auth">
            <form onSubmit={this.handleSubmit}>
              <input type="email" ref="email" placeholder="Enter email"/>
              <input type="password" ref="password" placeholder="Enter password"/>
              <input type="password" ref="passwordRepeat" placeholder="Repeat password"/>
              <button className="button success expanded">Sign Up</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default Signup;
