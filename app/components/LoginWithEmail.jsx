import React from 'react';

export let LoginWithEmail = React.createClass({
  handleSubmit(e) {
    e.preventDefault();

    console.log('Login with email!');
  },

  render() {
    return(
      <div className="row">
        <div className="columns small-centered small-10 medium-7 large-5">
          <div className="callout callout-auth">
            <form onSubmit={this.handleSubmit}>
              <input type="email" ref="email" placeholder="Enter email" />
              <input type="password" ref="password" placeholder="Enter password" />
              <button className="button success expanded">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
});

export default LoginWithEmail;
