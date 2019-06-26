import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";

import "../../assets/vendor/fontawesome-free/css/all.min.css";
import "../../assets/css/sb-admin-2.min.css";
import "./index.css";
import img from "./empacti.png";
import ErrorBoundary from "../Error/ErrorBoundary";

const SignInPage = () => (
  <div>
    <ErrorBoundary>
      <SignInForm />
    </ErrorBoundary>
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
    console.log("sigin form");
    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        console.log(this.state);
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
      <div className="bg-gradient-primary">
        <div className="container">
          {/*</div>//  Outer Row */}
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-12 col-md-9">
              <div className="card o-hidden border-0 shadow-lg my-5">
                <div className="card-body p-0">
                  {/*} <!-- Nested Row within Card Body -->*/}
                  <div className="row">
                    <div
                      className="col-lg-6 d-none d-lg-block bg-login-image"
                      style={{
                        margin: " 0 auto",
                        alignSelf: "center",
                        textAlign: "center"
                      }}
                    >
                      <img src={img} alt="img" />
                    </div>
                    <div className="col-lg-6">
                      <div className="p-5">
                        <div className="text-center">
                          <h1 className="h4 text-gray-900 mb-4">
                            Welcome Back!
                          </h1>
                        </div>
                        <form onSubmit={this.onSubmit} className="user">
                          <div className="form-group">
                            <input
                              type="email"
                              name="email"
                              value={email}
                              onChange={this.onChange}
                              className="form-control form-control-user"
                              id="form9"
                              aria-describedby="emailHelp"
                              placeholder="Enter Email or Ph.no"
                            />{" "}
                          </div>
                          <div className="form-group">
                            <input
                              type="password"
                              name="password"
                              value={password}
                              onChange={this.onChange}
                              className="form-control form-control-user"
                              id="form10"
                              placeholder="Password"
                            />
                          </div>

                          <div className="form-group">
                            <div className="custom-control custom-checkbox small">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="customCheck"
                              />
                              <label
                                className="custom-control-label form-text text-muted"
                                htmlFor="customCheck"
                              >
                                Remember Me
                              </label>
                            </div>
                          </div>
                          <button
                            href="#"
                            disabled={isInvalid}
                            className="btn btn-primary btn-user btn-block"
                            type="submit"
                          >
                            Login
                          </button>

                          {error && <p>{error.message}</p>}

                          <button
                            href="#"
                            className="btn btn-google btn-user btn-block"
                          >
                            <i className="fab fa-google fa-fw" /> Login with
                            Google
                          </button>
                        </form>

                        <div className="text-center">
                          <br />
                          <PasswordForgetLink />
                          <SignUpLink />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
