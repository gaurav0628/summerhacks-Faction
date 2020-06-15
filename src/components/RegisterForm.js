import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      cPassword: "",
      firstName: "",
      lastName: ""
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
      password: "",
      cPassword: "",
      firstName: "",
      lastName: ""
    });

    let msg =
      data.firstName +
      " | " +
      data.lastName +
      " | " +
      data.email +
      " | " +
      data.password +
      " | " +
      data.cPassword;
    alert(msg);

    // axios.post(`FAKEURL`, { data }).then(res => {
    //   console.log(res);
    //   console.log(res.data);
    // });

    /*    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      });


          axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      */
  }
  render() {
    const data = this.state;
    return (
      <>
        <TextField
          type="text"
          name="firstName" // make sure this is the same as the state.firstName
          label="First Name:"
          value={data.firstName}
          onChange={this.handleChange}
          fullWidth
        />
        <br />
        <TextField
          type="text"
          name="lastName" // make sure this is the same as the state.lastName
          label="Last Name:"
          value={data.lastName}
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
          name="cPassword" // make sure this is the same as the state.cPassword
          label="Confirm Password:"
          value={data.cPassword}
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
      </>
    );
  }
}

export default RegisterForm;
