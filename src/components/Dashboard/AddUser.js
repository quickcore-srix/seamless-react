import React, { Component } from "react";
import { withFirebase } from "../Firebase";
import { compose } from "recompose";
import { withRouter } from "react-router-dom";

const AddUserPage = () => (
  <div>
    <AddUserForm>Add User</AddUserForm>
  </div>
);

const INITIAL_STATE = {
  name: "",
  email: "",
  password: "",
  mac_id: "",
  address: "",
  phone: "",
  error: "",
  roles: []
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = { ...INITIAL_STATE };
  }
  onSubmit = event => {
    const { name, email, password, mac_id, address, phone } = this.state;
    const add = this.props.firebase.funct.httpsCallable("addTag");
    add({
      email: email,
      phone: "+91" + phone,
      name: name,
      disabled: false,
      roles: [],
      mac_id: mac_id,
      address: address
    })
      .then(result => {
        console.log("   user created : " + this.state.name);
        console.log(result);
      })
      .catch(error => console.log("error creating user : ", error));
    alert("user created : " + this.state.name);

    // event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { name, email, password, mac_id, address, phone, error } = this.state;

    const isInvalid =
      password === "" ||
      email === "" ||
      name === "" ||
      mac_id === "" ||
      address === "" ||
      phone === "";
    return (
      <div className="text-center">
        <div className="row">
          <div className="mx-auto col-md-6 col-10 bg-white p-5">
            <h1 className="mb-4">Add User</h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  className="form-control"
                  name="name"
                  value={name}
                  onChange={this.onChange}
                  type="text"
                  placeholder="UserName"
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
                  name="email"
                  value={email}
                  onChange={this.onChange}
                  type="email"
                  placeholder="Email Address"
                  id="form11"
                />{" "}
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={this.onChange}
                  type="password"
                  placeholder="Password"
                  id="form12"
                />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  name="phone"
                  value={phone}
                  onChange={this.onChange}
                  type="number"
                  placeholder="Phone"
                  id="form13"
                />{" "}
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

const AddUserForm = compose(
  withRouter,
  withFirebase
)(AddUser);

export default AddUserPage;
export { AddUser };
