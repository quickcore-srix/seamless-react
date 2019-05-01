import React from "react";
import { Switch, Route } from "react-router-dom";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import { UserItem } from "../Users";
import * as ROLES from "../../constants/roles";
import * as ROUTES from "../../constants/routes";
import ManageUsers from "./";
import { withFirebase } from "../Firebase";

const AdminPage = () => (
  <div>
    <h1>Admin</h1>
    <p>The Admin Page is accessible by every signed in admin user.</p>

    <Switch>
      <Route exact path={ROUTES.ADMIN_DETAILS} component={UserItem} />
      <Route exact path={ROUTES.ADDUSER} component={ManageUsers} />
    </Switch>
  </div>
);

const condition = authUser => authUser && authUser.roles.includes(ROLES.ADMIN);

export default compose(
  withEmailVerification,
  withAuthorization(condition),
  withFirebase
)(AdminPage);
