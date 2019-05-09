import React, { Component } from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";

import { withAuthorization, withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import AddUserPage from "../Admin/AddUser";

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

  componentWillUnmount() {
    //this.props.firebase.users().off();
  }

  render() {
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
        <AddUserPage />
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
