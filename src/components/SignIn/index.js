import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

const SignInPage = () => (
  <div>
    <SignInForm />
  </div>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null
};

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div
        className="text-center"
        //style={{background-image:" url('https://static.pingendo.com/cover-bubble-dark.svg')"}}
      >
        <div className="row">
          <div className="mx-auto col-md-6 col-10 bg-white p-5">
            <h1 className="mb-4">Log in</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="email"
                  placeholder="Email Address"
                  id="form9"
                />{" "}
              </div>
              <div className="form-group mb-3">
                <input
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  id="form10"
                />
                <small className="form-text text-muted text-right">
                  <a href="#"> Recover password</a>
                </small>
              </div>
              <button
                className="btn btn-primary"
                disabled={isInvalid}
                type="submit"
              >
                Sign In
              </button>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>

        <div>
          <PasswordForgetLink />
          <SignUpLink />
        </div>
      </div>
    );
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
