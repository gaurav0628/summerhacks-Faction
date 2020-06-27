import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import { Link } from "react-router-dom";

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

  postData() {
    //   const data = JSON.stringify(this.state);

    var config = {
      method: "post",
      url:
        "https://cors-anywhere.herokuapp.com/https://faction-dev.herokuapp.com/api/user-api/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: this.state,
    };

    axios(config)
      .then(function (response) {
        alert("success, check console");
        console.log(JSON.stringify(response.data));
        localStorage.setItem("author-token", response.data.token); // write
        console.log(localStorage.getItem("author-token")); // read
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
    });
  }
  render() {
    const data = this.state;
    return (
      <>
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
      </>
    );
  }
}

export default LoginForm;
