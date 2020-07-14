import React from "react";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { Input, InputBase } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

import ExploreGroupsCard from "./ExploreGroupsCard";
import "../styles/searchBar.css";

class ExploreGroups extends React.Component {
  render() {
    return (
      <div>
        <Button color="inherit" component={Link} to="/create">
          Create New Group
        </Button>

        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={6}>
            <div className="searchBar">
              <InputBase fullWidth placeholder=" Find your next group..." />
            </div>
          </Grid>
          <Grid item xs={1}>
            <IconButton variant="contained" color="primary">
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
          <Grid item xs={8}>
            <ExploreGroupsCard />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default ExploreGroups;
