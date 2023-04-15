import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./add.scss";
import axios from "axios";

const AddContact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    fullName: "",
  });
  const [saved, setSaved] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(formData);

    // TODO: Submit the form data to a server or API
    axios
      .post("http://localhost:3000/contacts", formData)
      .then((response) => {
        setSaved(true);
        setTimeout(() => {
          setSaved(false);
        }, 4000);
      })
      .catch((error) => {
        console.log(error);
        setError(true);
        setTimeout(() => {
          setError(false);
        }, 4000);
      });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="myForm mx-auto my-auto">
        <Form onSubmit={handleSubmit}>
          {saved && (
            <div className="alert alert-success" role="alert">
              Successfully saved
            </div>
          )}
          {error && (
            <div className="alert alert-danger" role="alert">
              Something went wrong. Try again later
            </div>
          )}
          <div className="add">ADD CONTACT</div>

          <Form.Group controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter  names"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter  email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group controlId="formPhone">
            <Form.Label>Contact</Form.Label>
            <Form.Control
              placeholder="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <div className="butn">
            <Button variant="primary" type="submit">
              Save
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddContact;
