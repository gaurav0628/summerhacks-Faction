import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import "../styles/dashbar.css";
import AvatarBubble from "./AvatarBubble";

class DashboardNavigationBar extends React.Component {
  handleClick() {
    window.localStorage.clear();
    alert("success");
    window.location.reload();
  }

  render() {
    return (
      <AppBar position="static" class="cooloor">
        <Toolbar>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/explore"
              >
                Explore Groups
              </Button>
            </Grid>
            <Grid item xs={3}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                disableElevation
                component={Link}
                to="/mygroups"
              >
                My Groups
              </Button>
            </Grid>
            <Grid item xs={5} />
            <Grid item xs={1}>
              <Button
                fullWidth
                variant="contained"
                color="secondary"
                disableElevation
                onClick={this.handleClick}
              >
                Log Out
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default DashboardNavigationBar;
