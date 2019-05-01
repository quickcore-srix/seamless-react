import React, { Component } from "react";

import { withFirebase } from "../Firebase";

class UserItem extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.setState();
    console.log(this.props);
    // console.log(this.props.firebase.user());
    var docRef = this.props.firebase.db.doc(
      `users/bBWz00y3KChJbzOBvb6DtviVuBw1`
    );
    docRef
      .get()
      .then(function(doc) {
        if (doc.exists) {
          console.log("data : ", doc.data());
        } else {
          console.log("no such document");
        }
      })
      .catch(function(error) {
        console.log("error", error);
      });
  }

  componentWillUnmount() {
    //this.props.firebase.user(this.props.match.params.id).off();
  }

  onSendPasswordResetEmail = () => {
    //this.props.firebase.doPasswordReset(this.state.user.email);
  };

  render() {
    // const { user, loading } = this.state;

    return (
      <h1> users</h1>
      /*<div>
        <h2>User ({this.props.match.params.id})</h2>
        {loading && <div>Loading ...</div>}

        {user && (
          <div>
            <span>
              <strong>ID:</strong> {user.uid}
            </span>
            <span>
              <strong>E-Mail:</strong> {user.email}
            </span>
            <span>
              <strong>Username:</strong> {user.username}
            </span>
            <span>
              <button type="button" onClick={this.onSendPasswordResetEmail}>
                Send Password Reset
              </button>
            </span>
          </div>
        )}
      </div>*/
    );
  }
}

export default withFirebase(UserItem);
