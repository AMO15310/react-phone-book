import React, { Component } from "react";
import "./contact.scss";
import Card from "./Contact-card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faTimes } from "@fortawesome/free-solid-svg-icons";
import AddContact from "./AddContact";
import axios from "axios";

class ContactMain extends Component {
  state = {
    isVisible: false,
    data: [],
    error: null,
    isLoading: true,
  };
  handleToggle = () => {
    this.setState({
      isVisible: !this.state.isVisible,
    });
  };
  contacts = () => {
    return this.state.data.map((contact) => (
      <div key={contact.id} className="cont">
        <Card
          phone={contact.phoneNumber}
          full={contact.fullName}
          first={contact.name}
          email={contact.email}
          path={contact.id}
        />
      </div>
    ));
  };
  componentDidMount() {
    axios
      .get("http://localhost:3000/contacts")
      .then((response) => {
        this.setState({
          data: response.data,
          isLoading: false,
        });
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          error: error,
        });
        console.log(error);
      });
  }
  render() {
    return (
      <div className="container-fluid main d-flex flex-column justify-content-center">
        <div className="top fixed-top"></div>
        <div className="center mx-auto my-auto">
          <div className="phone-booth mx-auto">
            <span className="badge bdg bg-primary w-50">CONTACTS</span>
          </div>
          {!this.state.isLoading ? (
            <div className="components mx-auto my-auto d-flex flex-column">
              {!this.state.isVisible ? (
                <div className="components mx-auto  d-flex flex-column">
                  {this.contacts()}
                </div>
              ) : (
                <div className="addCont">
                  <AddContact />
                </div>
              )}
              {!this.state.isVisible ? (
                <div className="cards">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faPlus}
                    onClick={this.handleToggle}
                  />
                </div>
              ) : (
                <div className="cards">
                  <FontAwesomeIcon
                    className="icon"
                    icon={faTimes}
                    onClick={this.handleToggle}
                  />
                </div>
              )}
            </div>
          ) : (
            <div className="spinner">
              <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ContactMain;
