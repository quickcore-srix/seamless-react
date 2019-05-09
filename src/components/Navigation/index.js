import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import * as ROLES from "../../constants/roles";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container">
      {" "}
      <div className="sidebar">
        <a href="#home">
          <i className="fa fa-fw fa-home" /> Home
        </a>
        <a href="#services">
          <i className="fa fa-fw fa-wrench" /> Services
        </a>
        <a href="#clients">
          <i className="fa fa-fw fa-user" /> Clients
        </a>
        <a href="#contact">
          <i className="fa fa-fw fa-envelope" /> Contact
        </a>
      </div>
      <button
        className="navbar-toggler navbar-toggler-right border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbar18"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar18">
        {" "}
        <a className="navbar-brand d-none d-md-block" href="/">
          <i className="fa d-inline fa-lg fa-circle" />
          <b>SEAMLESS CONNECTIVITY</b>
        </a>
        <ul className="navbar-nav">
          <Link
            className="nav-item nav-link"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.LANDING}
          >
            Landing
          </Link>
          <Link
            className="nav-item nav-link"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.DASHBOARD}
          >
            Dashboard
          </Link>
          <Link
            className="nav-item nav-link"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.HOME}
          >
            Home
          </Link>
          <Link
            className="nav-item nav-link"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.ACCOUNT}
          >
            Account
          </Link>
          {authUser.roles.includes(ROLES.ADMIN) && (
            <Link
              className="nav-item nav-link"
              style={{ shadow: "0px 0px 0px white" }}
              to={ROUTES.ADMIN}
            >
              Admin
            </Link>
          )}

          <SignOutButton
            className="nav-item text-white shadow d-flex flex-grow-1"
            style={{ shadow: "0px 0px 0px white" }}
          />
        </ul>
      </div>
    </div>
  </nav>
);

const NavigationNonAuth = () => (
  <nav className="navbar navbar-expand-md navbar-dark bg-primary">
    <div className="container">
      {" "}
      <button
        className="navbar-toggler navbar-toggler-right border-0"
        type="button"
        data-toggle="collapse"
        data-target="#navbar18"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbar18">
        {" "}
        <a className="navbar-brand d-none d-md-block" href="/">
          <i className="fa d-inline fa-lg fa-circle" />
          <b>SEAMLESS CONNECTIVITY</b>
        </a>
        <ul className="navbar-nav">
          <Link
            className="nav-item nav-link"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.LANDING}
          >
            Landing
          </Link>
          <Link
            className="nav-item nav-link navbar-toggler-left"
            style={{ shadow: "0px 0px 0px white" }}
            to={ROUTES.SIGN_IN}
          >
            Sign In
          </Link>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navigation;
