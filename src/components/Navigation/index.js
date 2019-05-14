import React from "react";
import { Link } from "react-router-dom";

import { AuthUserContext } from "../Session";
import Home from "../Home";
import SignInPage from "../SignIn";

const Navigation = () => (
  <AuthUserContext.Consumer>
    {authUser =>
      authUser ? <NavigationAuth authUser={authUser} /> : <NavigationNonAuth />
    }
  </AuthUserContext.Consumer>
);

const NavigationAuth = ({ authUser }) => <div />;

const NavigationNonAuth = () => <div />;

export default Navigation;
