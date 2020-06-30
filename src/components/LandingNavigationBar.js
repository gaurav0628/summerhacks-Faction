import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class LandingNavigationBar extends React.Component {
  render() {
    return (
      <div>
        <AppBar position="static">
          <Toolbar>
            <Grid
              container
              direction="row"
              justify="space-between"
              alignItems="center"
            >
              <Grid item xs={1}>
                <Button fullWidth color="inherit" component={Link} to="/about">
                  About
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  fullWidth
                  color="inherit"
                  component={Link}
                  to="/courses"
                >
                  Courses
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button fullWidth color="inherit" component={Link} to="/donate">
                  Donate
                </Button>
              </Grid>
              <Grid item xs={7} />
              <Grid item xs={1}>
                <Button fullWidth color="inherit" component={Link} to="/">
                  Log in
                </Button>
              </Grid>
              <Grid item xs={1}>
                <Button
                  fullWidth
                  variant="contained"
                  disableElevation
                  color="secondary"
                  component={Link}
                  to="/register"
                >
                  Register
                </Button>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default LandingNavigationBar;
