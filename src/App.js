import React from "react";
import { Switch, Route, Link } from "react-router-dom";

// Pages
import LoginRegister from "./pages/LoginRegister";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  render() {
    return (
      <>
        <h1>
          This will be the header bar, where we click links to render other
          componnts
          <ul>
            <li>
              <Link to="/">LoginRegister</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </h1>

        <Switch>
          <Route exact path="/" component={LoginRegister} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </>
    );
  }
}

export default App;

/*

handles which pages to show based on URL

*/
