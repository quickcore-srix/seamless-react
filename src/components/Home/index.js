import React, { Component } from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";
import ManageUsers from "../Admin/ManageUsers";

class HomePage extends Component {
  constructor(props) {
    super(props);
    //console.log("current user : ", this.props.firebase.auth.currentUser.uid);
    this.state = {
      users: []
      //uid: this.props.firebase.auth.currentUser.uid
    };
  }

  componentDidMount() {
    this.props.firebase.db.collection("users").onSnapshot(
      function(querySnapshot) {
        var allUsers = [];
        querySnapshot.forEach(function(doc) {
          allUsers.push(doc.data().username);
        });
        //console.log("Current cities in CA: ", cities.join(", "));
        //console.log(this.props);
        if (allUsers) {
          this.setState({
            users: allUsers
          });
        } else {
          this.setState({ users: ["no users"] });
        }
      }.bind(this)
    );
  }

  /* addUser = () => {
    //console.log(this.props.firebase);

    //console.log(this.functions);
    const add = this.props.firebase.funct.httpsCallable("addUser");
    add({
      email: "admin1@gmail.com",
      emailVerified: false,
      phoneNumber: "+11234567890",
      password: "admin1",
      displayName: "admin1",
      disabled: false,
      admin: ["ADMIN"]
    }).then(result => {
      console.log(result);
    });
  };
*/
  componentWillUnmount() {
    //this.props.firebase.users().off();
  }

  render() {
    //console.log(this.authUser);
    return (
      <div>
        <h1>Home Page</h1>
        <p>All Users</p>
        <div>
          <ul>
            {this.state.users.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        {/*<Messages users={this.state.users} />*/}
        <ManageUsers />
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
