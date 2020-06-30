import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

import LandingNavigationBar from "../components/LandingNavigationBar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";
import "../styles/Landing.css";

class Landing extends React.Component {
  render() {
    return (
      <div>
        <LandingNavigationBar />
        <Grid container direction="column">
          <Grid item container>
            <Grid item container xs={6} className="panels leftPanel">
              <img
                src={require("../images/collaboration.jpg")}
                className="leftPanelImg"
              />
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <div>
                  <Typography
                    variant="h4"
                    gutterbottom
                    className="missionTitle up"
                  >
                    JOIN A COLLABORATIVE COMMUNIT Y OF PROBLEM SOLVERS
                  </Typography>
                  <Typography
                    variant="h6"
                    gutterbottom
                    className="missionTitle down"
                  >
                    We are commited to blah blah insert mission statement here.
                    Collaboration. Working together. Team work. Use enough eye
                    catching and trusting words that whoever actually glances at
                    this for reasurance they should sign up, is convinced to
                    sign up today.
                  </Typography>
                </div>
              </Grid>
              <Grid item xs={2}></Grid>
            </Grid>
            <Grid item xs={6} className="panels">
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <Grid item xs={7}>
                  <Switch>
                    <Route path="/register" component={RegisterForm} />
                    <Route path="/" component={LoginForm} />
                  </Switch>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Landing;
