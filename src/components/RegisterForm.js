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
      emailError: "",
      password: "",
      passwordError: "",
      password2: "",
      password2Error: "",
      first_name: "",
      first_nameError: "",
      last_name: "",
      last_nameError: "",
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
  validation = () => {
    let isError = false;
    const errors = {
      first_nameError: "",
      last_nameError: "",
      emailError: "",
      passwordError: "",
      password2Error: "",
    };
    if (this.state.first_name.length < 1) {
      isError = true;
      errors.first_nameError = "Input your first name";
    }
    if (this.state.last_name.length < 1) {
      isError = true;
      errors.last_nameError = "Input your last name";
    }
    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Input a valid e-mail";
    }
    if (this.state.password.length < 1) {
      isError = true;
      errors.passwordError = "Create a password";
    }
    if (!(this.state.password === this.state.password2)) {
      isError = true;
      errors.password2Error = "Passwords must match";
    }
    this.setState({
      ...this.state,
      ...errors,
    });
    return isError;
  };
  postData() {
    var data = JSON.stringify(this.state);
    var config = {
      method: "post",
      url:
        "https://obscure-temple-54174.herokuapp.com/https://faction-dev.herokuapp.com/api/user-api/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };
    axios(config)
      .then(function (response) {
        alert("Successfully Registered");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert("Error");
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
    const err = this.validation();
    console.log("err");
    if (!err) {
      this.postData();
      this.setState({
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        password2: "",
        password2Error: "",
        first_name: "",
        first_nameError: "",
        last_name: "",
        last_nameError: "",
      });
    }
  }
  render() {
    const data = this.state;
    return (
      <div>
        <TextField
          type="text"
          name="first_name" // make sure this is the same as the state.first_name
          label="First Name:"
          value={data.first_name}
          onChange={this.handleChange}
          error={data.first_nameError}
          helperText={data.first_nameError}
          fullWidth
        />
        <br />
        <TextField
          type="text"
          name="last_name" // make sure this is the same as the state.last_name
          label="Last Name:"
          value={data.last_name}
          onChange={this.handleChange}
          error={data.last_nameError}
          helperText={data.last_nameError}
          fullWidth
        />
        <br />
        <TextField
          type="email"
          name="email" // make sure this is the same as the state.email
          label="Email Address:"
          value={data.email}
          onChange={this.handleChange}
          error={data.emailError}
          helperText={data.emailError}
          fullWidth
          required={true}
        />
        <br />
        <TextField
          type="password"
          name="password" // make sure this is the same as the state.password
          label="Password:"
          value={data.password}
          onChange={this.handleChange}
          error={data.passwordError}
          helperText={data.passwordError}
          fullWidth
        />
        <br />
        <TextField
          type="password"
          name="password2" // make sure this is the same as the state.password2
          label="Confirm Password:"
          value={data.password2}
          onChange={this.handleChange}
          error={data.password2Error}
          helperText={data.password2Error}
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
      </div>
    );
  }
}

export default RegisterForm;
