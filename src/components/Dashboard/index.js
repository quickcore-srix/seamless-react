import React, { Component } from "react";
import { compose } from "recompose";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter, NavLink } from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";
import * as ROUTES from "../../constants/routes";

import "../../assets/vendor/fontawesome-free/css/all.min.css";

import "../../assets/vendor/datatables/dataTables.bootstrap4.min.css";
import "../../assets/css/sb-admin-2.min.css";
import "./index.css";

import AllData from "./alldata";
import AddUserPage from "./AddUser";
import AddNodePage from "./AddNode";
let divStyle = {
  display: "flex",
  flexDirection: "row"
};
let text = {
  color: "green",
  textAlign: "center"
};
class Dashboard extends Component {
  constructor(props) {
    super(props);
    //console.log("current user : ", this.props.firebase.auth.currentUser.uid);
    this.state = {
      users: []
      //uid: this.props.firebase.auth.currentUser.uid
    };
  }

  render() {
    return (
      <Router>
        <div style={divStyle}>
          <div>
            <ul
              className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
              id="accordionSidebar"
            >
              {/* <!-- Sidebar - Brand -->*/}
              <a
                className="sidebar-brand d-flex align-items-center justify-content-center"
                href=""
              >
                <div className="sidebar-brand-icon rotate-n-15">
                  <i className="fas fa-laugh-wink" />
                </div>
                <div className="sidebar-brand-text mx-3">
                  quickcore<sup>srix</sup>
                </div>
              </a>

              {/* <!-- Divider -->*/}
              <hr className="sidebar-divider my-0" />

              {/* <!-- Nav Item - Dashboard -->*/}
              <li className="nav-item">
                <NavLink className="nav-link" to={ROUTES.HOME}>
                  <i className="fas fa-fw fa-tachometer-alt" />
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="nav-item" id="allUsers">
                <NavLink className="nav-link" to={ROUTES.ALLUSERS}>
                  <i className="fas fa-fw fa-chart-area" />
                  <span>AllUsers</span>
                </NavLink>
              </li>

              {/*<!-- Divider -->*/}
              <hr className="sidebar-divider" />

              {/*<!-- Heading -->*/}
              <div className="sidebar-heading">Interface</div>

              {/* <!-- Nav Item - Pages Collapse Menu -->*/}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href=""
                  data-toggle="collapse"
                  data-target="#collapseTwo"
                  aria-expanded="true"
                  aria-controls="collapseTwo"
                >
                  <i className="fas fa-fw fa-cog" />
                  <span>Add devices/ Users</span>
                </a>
                <div
                  id="collapseTwo"
                  className="collapse"
                  aria-labelledby="headingTwo"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Admin functions:</h6>
                    <NavLink to={ROUTES.ADDUSER} activestyle={{ color: "red" }}>
                      <i className="collapse-item">Add New User</i>
                    </NavLink>
                    <NavLink to={ROUTES.ADDNODE} activestyle={{ color: "red" }}>
                      <i className="collapse-item">Add New Node</i>
                    </NavLink>
                    <NavLink to="#" activestyle={{ color: "red" }}>
                      <i className="collapse-item">Add New Admin</i>
                    </NavLink>
                  </div>
                </div>
              </li>

              {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
              <li className="nav-item">
                <a
                  className="nav-link collapsed"
                  href=""
                  data-toggle="collapse"
                  data-target="#collapseUtilities"
                  aria-expanded="true"
                  aria-controls="collapseUtilities"
                >
                  <i className="fas fa-fw fa-wrench" />
                  <span>Update options</span>
                </a>
                <div
                  id="collapseUtilities"
                  className="collapse"
                  aria-labelledby="headingUtilities"
                  data-parent="#accordionSidebar"
                >
                  <div className="bg-white py-2 collapse-inner rounded">
                    <h6 className="collapse-header">Update options:</h6>
                    <a className="collapse-item" href="">
                      Update User
                    </a>
                    <a className="collapse-item" href="">
                      Update Node
                    </a>
                  </div>
                </div>
              </li>

              {/* <!-- Divider -->*/}
              <hr className="sidebar-divider" />

              {/*  <!-- Heading -->*/}
              <div className="sidebar-heading">Addons</div>
              {/*<!-- Nav Item - Charts --> */}

              {/* <!-- Divider --> */}
              <hr className="sidebar-divider d-none d-md-block" />
              {/* <!-- Sidebar Toggler (Sidebar) --> */}
              <div className="text-center d-none d-md-inline">
                <button
                  className="rounded-circle border-0"
                  id="sidebarToggle"
                />
              </div>
            </ul>
          </div>
          <div align="left">
            <h4 style={text}>Connecting seamlessly.....</h4>
            <Route path={ROUTES.ADDUSER} component={AddUserPage} />
            <Route path={ROUTES.ADDNODE} component={AddNodePage} />
            <Route path={ROUTES.ALLUSERS} component={AllData} />
          </div>
        </div>
      </Router>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(Dashboard);
