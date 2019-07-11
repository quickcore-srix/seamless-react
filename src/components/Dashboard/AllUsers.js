import React, { Component } from "react";
import { compose } from "recompose";

import { withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";

class AllUsersPage extends Component {
  constructor(props) {
    super(props);
    //console.log("current user : ", this.props.firebase.auth.currentUser.uid);
    this.state = {
      users: []
      //uid: this.props.firebase.auth.currentUser.uid
    };
  }

  componentDidMount() {
    console.log("alluserspage : ", this.props.children);
    this.props.firebase.db.collection("users").onSnapshot(querySnapshot => {
      var allUsers = [];
      querySnapshot.forEach(doc => {
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
    });
  }

  render() {
    return (
      <div>
        {
          <ul>
            {this.state.users.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        }
        {console.log(this.state.users)}
      </div>
    );
  }
}
export default compose(
  withFirebase,
  withEmailVerification
)(AllUsersPage);
