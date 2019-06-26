import React, { Component } from "react";
import { compose } from "recompose";
import { Link } from "react-router-dom";

import { withAuthorization, withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import AddUserPage from "../Dashboard/AddUser";
import Header from "../Header";
import Sidebar from "../SideBar";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import SignOut from "../SignOut";

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
        <div id="page-top">
          {/*  <!-- Page Wrapper -->*/}
          <div id="wrapper">
            {/* <!-- Sidebar --> */}
            <Sidebar />
            {/* <!-- End of Sidebar --> */}

            {/* <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column">
              {/* <!-- Main Content --> */}
              <div id="content">
                {/* <!-- Topbar --> */}
                <Header />
                {/* <!-- End of Topbar --> */}

                {/* <!-- Begin Page Content --> */}
                <Dashboard />
              </div>
              {/* <!-- End of Main Content --> */}
              <Footer />
            </div>
            {/* <!-- End of Content Wrapper --> */}
          </div>
          {/* <!-- End of Page Wrapper --> */}

          {/* <!-- Scroll to Top Button--> */}
          <a className="scroll-to-top rounded" href="#page-top">
            <i className="fas fa-angle-up" />
          </a>

          {/* <!-- Logout Modal--> */}
          <SignOut />
          {/* <!-- Bootstrap core JavaScript--> */}
          <script src="./assets/vendor/jquery/jquery.min.js" />
          <script src="./assets/vendor/bootstrap/js/bootstrap.bundle.min.js" />

          {/* <!-- Core plugin JavaScript--> */}
          <script src="./assets/vendor/jquery-easing/jquery.easing.min.js" />

          {/* <!-- Custom scripts for all pages--> */}
          <script src="./assets/js/sb-admin-2.min.js" />
        </div>
        <p>All Users</p>
        <div>
          <ul>
            {this.state.users.map(item => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
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
