import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

// Pages & components
import Donate from "./pages/Donate";
import Courses from "./pages/Courses";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import LoginRegister from "./pages/LoginRegister";

//Style
import "./App.css";
import Typography from '@material-ui/core/Typography';


class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Grid container direction="column">
          <Grid item container>
          <Grid item container xs={6} className="panels leftPanel">

              <img src={require('./images/collaboration.jpg')} className = "leftPanelImg"/>
              <Grid item xs={2}></Grid>
              <Grid item xs={8}>
                <div>
                  <Typography variant='h5' gutterbottom className = "missionTitle">JOIN A COLLABORATIVE COMMUNIT
                    Y OF PROBLEM SOLVERS</Typography>
                </div>
              </Grid>
              <Grid item xs={2}></Grid>


       </Grid>
            <Grid item xs={6} className="panels">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/donate" component={Donate} />
                <Route path="/" component={LoginRegister} />
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
