import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";

import "../../assets/vendor/fontawesome-free/css/all.min.css";

import "../../assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "../../assets/css/sb-admin-2.min.css";
import "./index.css";
import Data from "./data";
import Footer from "../Footer";
import Sidebar from "../SideBar";
import Header from "../Header";
import SignOut from "../SignOut";

class Dashboard extends Component {
  render() {
    return <Data />;
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(Dashboard);
