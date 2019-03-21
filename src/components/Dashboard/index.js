import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../Session";

class Dashboard extends Component {
  render() {
    return (
      <div className="py-5 text-center">
        <div className="container">
          <div className="row">
            <div className="mx-auto col-lg-10">
              <h1>Dashboard</h1>
              <div className="row">
                <div className="col-md-6 px-5 mt-3">
                  {" "}
                  <i className="d-block fa fa-stop-circle fa-4x mb-3 text-muted" />
                  <h4>Employee Activity</h4>
                  <p className="mb-3">
                    To display the last activity of the employee click on Last
                    acctivity button.
                  </p>
                  <div className="form-group">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter employee id"
                      id="empid"
                    />{" "}
                  </div>
                  <a className="btn btn-outline-primary" href="/">
                    Last Activity
                  </a>
                  <p className="mb-3">
                    To find the acivities over a period, select the start and
                    end dates and click on track it button below.
                  </p>
                  <div className="form-group">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter employee id"
                      id="empid1"
                    />{" "}
                  </div>
                  <div className="form-group">
                    {" "}
                    Start Date:{" "}
                    <input type="date" data-date-inline-picker="true" />
                  </div>
                  <div className="form-group">
                    {" "}
                    End Date :{" "}
                    <input type="date" data-date-inline-picker="true" />
                  </div>
                  <a className="btn btn-outline-primary" href="/">
                    Track It!
                  </a>
                  <br />
                </div>
                <div className="col-md-6 px-5 mt-3">
                  <i className="d-block fa fa-stop-circle-o fa-4x mb-3 text-muted" />
                  <h4>Departmental Activity</h4>
                  <p className="mb-3">
                    To display the Departmental Activities, enter department and
                    click on track it button below.
                  </p>
                  <div className="form-group">
                    {" "}
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter department id"
                      id="empid"
                    />{" "}
                  </div>
                  <a className="btn btn-primary" href="/">
                    Track It!
                    <br />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(Dashboard);
