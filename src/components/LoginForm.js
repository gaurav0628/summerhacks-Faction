import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import axios from "axios";

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
    alert(
      "submitted login: email(" +
        data.email +
        ") || password(" +
        data.password +
        ")"
    );
    /*  axios.post(`https://jsonplaceholder.typicode.com/`, { data }).then(res => {
      console.log(res);
      console.log(res.data);
    });*/
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
      </>
    );
  }
}

export default LoginForm;
