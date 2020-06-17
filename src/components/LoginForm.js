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
      password: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const data = this.state;
    this.setState({
      email: "",
      password: ""
    });
    console.log(data);
    // validation needed
    axios
      .post("api/auth", {
        data
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
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
