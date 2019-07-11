import React, { Component } from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import { withFirebase } from "../Firebase";
import Header from "../Header";
import Dashboard from "../Dashboard";
import Footer from "../Footer";
import SignOut from "../SignOut";

const HomePage = props => {
  return (
    <div>
      <div id="page-top">
        <div id="content-wrapper" className="d-flex flex-column">
          {/*  <!-- Page Wrapper -->*/}

          <Header />
          {/* <!-- End of Topbar --> */}
          {/* <!-- Content Wrapper --> */}

          {/* <!-- Main Content --> */}

          {/* <!-- Sidebar --> */}
          <Dashboard />
          {/* <!-- End of Sidebar --> */}

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
  );
};

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
