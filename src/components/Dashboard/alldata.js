import React, { Component } from "react";
import { compose } from "recompose";
import { withFirebase } from "../Firebase";

class AllData extends Component {
  constructor(props) {
    super(props);
    this.nodesRef = this.props.firebase.db.collection("nodes");
    this.usersRef = this.props.firebase.db.collection("users");
    this.unsubscribeNodes = null;
    this.unsubscribeUsers = null;
    this.state = {
      nodes: [],
      users: []
    };
  }

  onNodesCollectionUpdate = querySnapshot => {
    const nodes = [];
    querySnapshot.forEach(doc => {
      const { address, name } = doc.data();
      nodes.push({
        key: doc.id,
        doc, // DocumentSnapshot
        address,
        name
      });
    });
    this.setState({
      nodes
    });
  };

  onUsersCollectionUpdate = querySnapshot => {
    const users = [];
    querySnapshot.forEach(doc => {
      const { username } = doc.data();
      users.push({
        key: doc.id,
        doc, // DocumentSnapshot
        username
      });
    });
    this.setState({
      users
    });
  };

  componentDidMount() {
    this.unsubscribeNodes = this.nodesRef.onSnapshot(
      this.onNodesCollectionUpdate
    );
    this.unsubscribeUsers = this.usersRef.onSnapshot(
      this.onUsersCollectionUpdate
    );
  }

  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">DETAILS</h3>
        </div>
        <div className="panel-body">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>NODES</th>
              </tr>
            </thead>
            <tbody>
              {this.state.nodes.map(node => (
                <tr>
                  {/* <td>
                      <Link to={`/show/${board.key}`}>{board.title}</Link>
                    </td>
                    */}

                  <td>
                    <li key={node.key}>
                      {node.key} - {node.name}
                    </li>
                  </td>
                  {/*   <td>{board.author}</td>*/}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="panel-body">
          <table className="table table-stripe">
            <thead>
              <tr>
                <th>USERS</th>
              </tr>
            </thead>
            <tbody>
              {this.state.users.map(user => (
                <tr>
                  {/* <td>
                      <Link to={`/show/${board.key}`}>{board.title}</Link>
                    </td>
                    */}

                  <td>
                    <li key={user.key}>
                      {user.key} - {user.username}
                    </li>
                  </td>
                  {/*   <td>{board.author}</td>*/}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
export default compose(withFirebase)(AllData);
