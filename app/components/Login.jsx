import React from 'react';
import Navigation from 'Navigation';
import { connect } from 'react-redux';
import { facebookProvider, githubProvider, googleProvider, twitterProvider } from 'app/firebase/';
import { startLoginWith } from 'actions';

export var Login = React.createClass({
  handleLogin() {
    console.log('onLogin!');
  },
  handleSignup() {
    console.log('onSignUp!');
  },
  render() {
    var { dispatch } = this.props;
    return (
      <div>
        <div className="row">
          <div className="columns small-centered small-10 medium-7 large-5">
            <div className="callout callout-auth">
              <div className="callout-auth__social">
                <h3 className="callout-auth__social__header">Login with</h3>
                <button onClick={() => dispatch(startLoginWith(facebookProvider))} className="button expanded callout-auth__button" >Facebook</button>
                <button onClick={() => dispatch(startLoginWith(githubProvider))} className="button expanded callout-auth__button secondary" >GitHub</button>
                <button onClick={() => dispatch(startLoginWith(googleProvider))} className="button expanded callout-auth__button alert">Google</button>
                <button onClick={() => dispatch(startLoginWith(twitterProvider))} className="button expanded callout-auth__button">Twitter</button>
              </div>
              <hr/>
              <div className="callout-auth_sign button-group expanded">
                <button onClick={this.handleSignup} className="button success callout-auth__button">Sign up</button>
                <button onClick={this.handleLogin} className="button success callout-auth__button">Login</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default connect()(Login);
