import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

const AddNodePage = () => (
  <div>
    <AddNodeForm>Add User</AddNodeForm>
  </div>
);

const INITIAL_STATE = {
  name: "",
  mac_id: "",
  address: "",
  error: ""
};

class AddNode extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { name, mac_id, address } = this.state;
    const add = this.props.firebase.funct.httpsCallable("addNode");
    add({
      name: name,
      mac_id: mac_id,
      address: address
    })
      .then(result => {
        console.log("   node created : " + this.state.name);
        console.log(result);
      })
      .catch(error => console.log("error creating node : ", error));
    alert("user created : " + this.state.name);

    //event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, mac_id, address, error } = this.state;

    const isInvalid = name === "" || mac_id === "" || address === "";

    return (
      <div className="text-center">
        <div className="row">
          <div className="mx-auto bg-white p-5">
            <h1 className="mb-4">Add Node</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Node Name"
                  id="form9"
                />{" "}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="mac_id"
                  value={mac_id}
                  onChange={this.onChange}
                  type="text"
                  placeholder="MAC ID"
                  id="form10"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="address"
                  value={address}
                  onChange={this.onChange}
                  type="text"
                  placeholder="Address"
                  id="form14"
                />{" "}
              </div>
              <button
                className="btn btn-primary"
                disabled={isInvalid}
                type="submit"
              >
                ADD
              </button>
              {error && <p>{error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const AddNodeForm = compose(
  withRouter,
  withFirebase
)(AddNode);

export default AddNodePage;
export { AddNode };
