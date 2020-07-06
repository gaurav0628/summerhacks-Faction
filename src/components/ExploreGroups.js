import React from "react";

import ExploreGroupsCard from "./ExploreGroupsCard";

class ExploreGroups extends React.Component {
  render() {
    return (
      <div>
        <h1> This is the Explore Groups </h1>
        <ExploreGroupsCard />
        <ExploreGroupsCard />
        <ExploreGroupsCard />
      </div>
    );
  }
}

export default ExploreGroups;
