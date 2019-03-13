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
        <div className="container">
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
          <PasswordForgetLink />
            <SignUpLink />
        </div>
      </div>
    );
    {
      /* <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
          <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.2.1/js/bootstrap.min.js" integrity="sha384-B0UglyR+jN6CkvvICOB2joaf5I4l3gm9GU6Hc1og6Ls7i6U/mkkaduKaBhlAXv9k" crossorigin="anonymous"></script>
    */
    }
  }
}

const SignInForm = compose(
  withRouter,
  withFirebase
)(SignInFormBase);

export default SignInPage;

export { SignInForm };
