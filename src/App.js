import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import {Grid} from "@material-ui/core";

// Pages
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  render() {
    return (
      <>

      <Grid container direction="column">
        <Grid item>
          <h1>This will be the header bar, where we click links to render other
            componnts</h1>
            <ul>
              <li>
                <Link to="/">LoginRegister</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
            </ul>

        </Grid>
        <Grid item container>
          <Grid item xs={6}></Grid>

          <Grid item xs={6}>

          <Switch>
            <Route exact path="/" component={LoginRegister} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>

          </Grid>
        </Grid>
      </Grid>



      </>
    );
  }
}

export default App;

/*

handles which pages to show based on URL

*/
