import React, { Component } from "react";
import AddUserPage, { AddUser } from "../Dashboard/AddUser";
class Sidebar extends Component {
  render() {
    return (
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
          <a className="nav-link" href="/home">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-tachometer-alt" />
            <span>All Users</span>
          </a>
        </li>

        {/*<!-- Divider -->*/}
        <hr className="sidebar-divider" />

        {/*<!-- Heading -->*/}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu -->*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
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
              <a className="collapse-item" href="adduser">
                Add new user
              </a>
              <a className="collapse-item" href="addnode">
                Add new node
              </a>
              <a className="collapse-item" href="">
                Add new admin
              </a>
            </div>
          </div>
        </li>

        {/*<!-- Nav Item - Utilities Collapse Menu -->*/}
        <li className="nav-item">
          <a
            className="nav-link collapsed"
            href="#"
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
        <li className="nav-item">
          <a className="nav-link" href="">
            <i className="fas fa-fw fa-chart-area" />
            <span>Charts</span>
          </a>
        </li>

        {/*  <!-- Nav Item - Tables -->
      <!--li className="nav-item"> 
            <a className="nav-link" href="tables.html">
              <i className="fas fa-fw fa-table" />
              <span>Tables</span>
            </a>
             </li-->*/}

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider d-none d-md-block" />
        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        <div className="text-center d-none d-md-inline">
          <button className="rounded-circle border-0" id="sidebarToggle" />
        </div>
      </ul>
    );
  }
}

export default Sidebar;
