import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import SignInPage from "../SignIn";
import PasswordForgetPage from "../PasswordForget";
import HomePage from "../Home";
import AccountPage from "../Account";
import AdminPage from "../Admin";
import { AuthUserContext } from "../Session";

import * as ROUTES from "../../constants/routes";
import { withAuthentication } from "../Session";
import Footer from "../Footer";

class App extends Component {
  render() {
    return (
      <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <NavigationAuth authUser={authUser} />
          ) : (
            <NavigationNonAuth />
          )
        }
      </AuthUserContext.Consumer>
    );
  }
}

const NavigationAuth = ({ authUser }) => (
  <Router>
    <div>
      <Route exact path={ROUTES.LANDING} component={HomePage} />
      <Route path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.ACCOUNT} component={AccountPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
      <Redirect to="/home" />
    </div>
  </Router>
);

const NavigationNonAuth = () => (
  <Router>
    <div>
      <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.LANDING} component={SignInPage} />
      <Route path={ROUTES.PASSWORD_FORGET} component={PasswordForgetPage} />
      <Footer />
    </div>
  </Router>
);

export default withAuthentication(App);
