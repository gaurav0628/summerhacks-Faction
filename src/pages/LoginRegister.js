import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";

import RegisterForm from "../components/RegisterForm";
import LoginForm from "../components/LoginForm";

class LoginRegister extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      whichPage: "login"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    const curPage = this.state.whichPage;
    let newPage = curPage === "login" ? "register" : "login";
    this.setState({
      whichPage: newPage
    });
  }
  render() {
    const data = this.state;

    if (data.whichPage === "login") {
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "50vh" }}
        >
          <Grid item xs={3}>
            <Card>
              <LoginForm />
              <Button variant="contained" fullWidth onClick={this.handleClick}>
                Register Instead
              </Button>
            </Card>
          </Grid>
        </Grid>
      );
    } else
      return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justify="center"
          style={{ minHeight: "50vh" }}
        >
          <Grid item xs={12}>
            <Card>
              <>
                <RegisterForm />
                <Button
                  variant="contained"
                  onClick={this.handleClick}
                  fullWidth
                >
                  Go to Login
                </Button>
              </>
            </Card>
          </Grid>
        </Grid>
      );
  }
}

export default LoginRegister;
