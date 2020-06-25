import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }

  postData() {
    var axios = require("axios");
    var data = JSON.stringify(this.state);
    var config = {
      method: "post",
      url:
        "https://cors-anywhere.herokuapp.com/https://faction-dev.herokuapp.com/api/user-api/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        alert("success");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert("was an error, check console");
        if (error.response) {
          console.log("ERROR: Request made; server responded");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("ERROR: Request made; No response received");
          console.log(error.request);
        } else {
          console.log("ERROR: Setting up the request triggered an Error");
          console.log(error.message);
        }
      });
  }
  handleSubmit(event) {
    event.preventDefault();
    // client validation
    this.postData();
    this.setState({
      email: "",
      password: "",
      password2: "",
      first_name: "",
      last_name: "",
    });
  }
  render() {
    const data = this.state;
    return (
      <>
        <TextField
          type="text"
          name="first_name" // make sure this is the same as the state.first_name
          label="First Name:"
          value={data.first_name}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          type="text"
          name="last_name" // make sure this is the same as the state.last_name
          label="Last Name:"
          value={data.last_name}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          type="email"
          name="email" // make sure this is the same as the state.email
          label="Email Address:"
          value={data.email}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          type="password"
          name="password" // make sure this is the same as the state.password
          label="Password:"
          value={data.password}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          type="password"
          name="password2" // make sure this is the same as the state.password2
          label="Confirm Password:"
          value={data.password2}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          fullWidth
        >
          Register
        </Button>
        <br />
        <Button variant="contained" component={Link} to="/login" fullWidth>
          Log in Instead
        </Button>
      </>
    );
  }
}

export default RegisterForm;
