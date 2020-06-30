import React from "react";

import Landing from "./views/Landing";
import Dashboard from "./views/Dashboard";

class App extends React.Component {
  isAuthorized() {
    const auth_token = localStorage.getItem("author-token");
    return auth_token ? true : false;
  }
  render() {
    return this.isAuthorized() ? <Dashboard /> : <Landing />;
  }
}

export default App;
