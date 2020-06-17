import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

// Pages & components
import Donate from "./pages/Donate";
import Courses from "./pages/Courses";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

//Style
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <>
        <NavBar />
        <Grid container direction="column">
          <Grid item container>
            <Grid item xs={6} className="panels leftPanel" />
            <Grid item xs={6} className="panels">
              <Switch>
                <Route path="/about" component={About} />
                <Route path="/courses" component={Courses} />
                <Route path="/donate" component={Donate} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/" component={LoginForm} />
              </Switch>
            </Grid>
          </Grid>
        </Grid>
      </>
    );
  }
}

export default App;
