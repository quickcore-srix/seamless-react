import * as ROUTES from "../../constants/routes";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import React, { Component } from "react";
import { database } from "firebase";

class ManageUsers extends Component {
  constructor(props) {
    super(props);
    this.functions = this.props.firebase.funct;
    console.log(this.functions);
  }

  addUser = () => {
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

  deleteUser = email => {
    console.log("deleting user ", email);
    const delete1 = this.props.firebase.funct.httpsCallable("deleteUser");
    delete1({
      email: email
    }).then(result => {
      console.log(result);
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.addUser}>add User</button>
        <button onClick={this.deleteUser.bind(this, "admin1@gmail.com")}>
          delete User
        </button>
      </div>
    );
  }
}

export default compose(withFirebase)(ManageUsers);
