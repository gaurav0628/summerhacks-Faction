import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import DashboardNavigationBar from "../components/DashboardNavigationBar";
import MyGroups from "../components/MyGroups";
import Profile from "../components/Profile";
import ExploreGroups from "../components/ExploreGroups";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <DashboardNavigationBar />
        <Switch>
          <Route path="/explore" component={() => <ExploreGroups />} />
          <Route path="/profile" component={() => <Profile />} />
          <Route path="/" component={() => <MyGroups />} />
        </Switch>
      </div>
    );
  }
}

export default Dashboard;
