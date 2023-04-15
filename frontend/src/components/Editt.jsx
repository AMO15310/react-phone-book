import React, { Component } from "react";
import "./editt.scss";
import axios from "axios";

class Edit extends Component {
  state = {
    newName: "",
    newPhone: "",
    newLastName: "",
    newEmail: "",
    error: false,
    savedSuccess: false,
    deletedSuccess: false,
  };
  url = window.location.pathname;
  id = this.url.substring(this.url.lastIndexOf("/") + 1);
  componentDidMount() {
    axios
      .get(`http://localhost:3000/contacts/${this.id}`)
      .then((response) => {
        this.setState({
          newName: response.data.name,
          newLastName: response.data.fullName,
          newEmail: response.data.email,
          newPhone: response.data.phoneNumber,
        });
      })
      .catch((error) => {
        this.setState({
          error: error,
        });
        console.log(error);
      });
  }
  handleBack = () => {
    window.history.back();
  };

  setName = (e) => {
    this.setState({
      newName: e.target.value,
    });
  };
  setEmail = (e) => {
    this.setState({
      newEmail: e.target.value,
    });
  };
  setLastname = (e) => {
    this.setState({
      newLastName: e.target.value,
    });
  };
  setPhone = (e) => {
    this.setState({
      newPhone: e.target.value,
    });
  };
  handleSubmit = () => {
    const newData = {
      name: this.state.newName,
      email: this.state.newEmail,
      fullName: this.state.newLastName,
      phoneNumber: this.state.newPhone,
    };
    axios
      .patch(`http://localhost:3000/contacts/${this.id}`, newData)
      .then((response) => {
        this.setState({
          savedSuccess: true,
        });
        setTimeout(() => {
          this.setState({
            savedSuccess: false,
          });
          window.history.go(-1);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
        setTimeout(() => {
          this.setState({
            error: false,
          });
        }, 4000);
      });
  };
  handleDelete = () => {
    axios
      .delete(`http://localhost:3000/contacts/${this.id}`)
      .then((response) => {
        this.setState({
          deletedSuccess: true,
        });
        setTimeout(() => {
          this.setState({
            deletedSuccess: false,
          });
          window.history.go(-1);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          error: true,
        });
        setTimeout(() => {
          this.setState({
            error: false,
          });
        }, 4000);
      });
  };
  formData = () => {
    return (
      <div className="containers  d-flex flex-column mx-auto my-auto">
        <div className="name">
          <label htmlFor="name">First name: </label>
          <input
            type="text"
            name="name"
            value={this.state.newName}
            onChange={(e) => this.setName(e)}
          />
        </div>
        <div className="Last name">
          <label htmlFor="lastName">Last name: </label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => this.setLastname(e)}
            value={this.state.newLastName}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            onChange={(e) => this.setEmail(e)}
            value={this.state.newEmail}
          />
        </div>
        <div className="contact">
          <label htmlFor="contact">Contact: </label>
          <input
            type="text"
            name="contact"
            onChange={(e) => this.setPhone(e)}
            value={this.state.newPhone}
          />
        </div>
        <button
          className="btn btn-primary save"
          type="submit"
          onClick={this.handleSubmit}
        >
          Save
        </button>
        <button className="btn btn-danger" onClick={this.handleDelete}>
          Delete
        </button>
        <button className="btn btn-primary back" onClick={this.handleBack}>
          Back
        </button>
      </div>
    );
  };
  render() {
    return (
      <>
        <div className="container-fluid main d-flex flex-column justify-content-center">
          <div className="top fixed-top"></div>
          <div className="center mx-auto my-auto">
            <div className="phone-booth mx-auto d-flex flex-column">
              {this.state.deletedSuccess ? (
                <div className="alert alert-success" role="alert">
                  Successfully deleted !
                </div>
              ) : (
                ""
              )}
              {this.state.savedSuccess ? (
                <div className="alert alert-success" role="alert">
                  Contact saved Successfully
                </div>
              ) : (
                ""
              )}
              {this.state.error ? (
                <div className="alert alert-danger" role="alert">
                  Something went wrong ! try again later
                </div>
              ) : (
                ""
              )}
              <span className="badge bdg bg-primary w-50 mb-5">EDIT</span>
            </div>
            <div className="content-edit">{this.formData()}</div>
          </div>
        </div>
      </>
    );
  }
}

export default Edit;
