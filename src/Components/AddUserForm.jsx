import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class AddUserForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      gen: "",
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addNewUser(this.state);
    this.setState({
      name: "",
      email: "",
      gen: "",
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name </Form.Label>
          <Form.Control
            type="text"
            onChange={this.handleChange}
            value={this.state.name}
            name="name"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Gen</Form.Label>
          <Form.Control
            type="number"
            onChange={this.handleChange}
            value={this.state.gen}
            name="gen"
            placeholder="Gen"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}
