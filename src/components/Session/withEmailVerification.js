import React from "react";

import * as ROUTES from "../../constants/routes";
import AuthUserContext from "./context";
import { withFirebase } from "../Firebase";
import { withRouter } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { HOME } from "../../constants/routes";
import SignOutButton from "../SignOut/signout";

const needsEmailVerification = authUser =>
  authUser &&
  !authUser.emailVerified &&
  authUser.providerData
    .map(provider => provider.providerId)
    .includes("password");

const withEmailVerification = Component => {
  class WithEmailVerification extends React.Component {
    constructor(props) {
      super(props);
      console.log("withEmailVerification");
      this.state = { isSent: false, redirect: false };
    }

    onSendEmailVerification = () => {
      this.props.firebase
        .doSendEmailVerification()
        .then(() => this.setState({ isSent: true }));
    };

    render() {
      return (
        <AuthUserContext.Consumer>
          {authUser =>
            needsEmailVerification(authUser) ? (
              <div>
                {this.state.isSent ? (
                  <p>
                    E-Mail confirmation sent: Check your E-Mails (Spam folder
                    included) for a confirmation E-Mail. Refresh this page once
                    you confirmed your E-Mail.
                  </p>
                ) : (
                  <p>
                    Verify your E-Mail: Check your E-Mails (Spam folder
                    included) for a confirmation E-Mail or send another
                    confirmation E-Mail.
                  </p>
                )}

                <button
                  type="button"
                  onClick={this.onSendEmailVerification}
                  disabled={this.state.isSent}
                >
                  Send confirmation E-Mail
                </button>

                {
                  <div>
                    <button
                      type="button"
                      //onClick={this.props.history.push(ROUTES.SIGN_IN)}
                      //onClick={firebase.doSignout}
                    >
                      Back To HOME
                    </button>
                  </div>
                }
              </div>
            ) : (
              <Component {...this.props} />
            )
          }
        </AuthUserContext.Consumer>
      );
    }
  }

  return withRouter(withFirebase(WithEmailVerification));
};

export default withEmailVerification;
