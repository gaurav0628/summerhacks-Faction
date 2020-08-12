import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Link } from "react-router-dom";

import KEYS from "../keys.js";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
  async postData() {
    var config = {
      method: "post",
      url: KEYS.APIURL + "/user-api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: this.state,
    };
    var verdict = null;
    await axios(config)
      .then(function (response) {
        alert("Successfully logged in!");
        verdict = true;
        localStorage.setItem("auth-token", response.data.token);
        localStorage.setItem("user", response.data.user);
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert("Failed to log-in. Details in console.");
        verdict = false;
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
    return verdict;
  }
  async handleSubmit(event) {
    event.preventDefault();
    let verdict = await this.postData();
    this.setState({
      email: "",
      password: "",
    });
    console.log("verdict of axios login request & return value = " + verdict);
    if (verdict) {
      window.location.reload();
    }
  }
  render() {
    const data = this.state;
    return (
      <div>
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
        <Button
          variant="contained"
          color="primary"
          onClick={this.handleSubmit}
          fullWidth
        >
          Log in
        </Button>
        <br />
        <Button variant="contained" component={Link} to="/register" fullWidth>
          Register Instead
        </Button>
      </div>
    );
  }
}

export default LoginForm;
