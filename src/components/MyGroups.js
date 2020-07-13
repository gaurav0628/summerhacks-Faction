import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import MyGroupsCard from "../components/MyGroupsCard";
import AvatarBubble from "../components/AvatarBubble";
import "../styles/dashbar.css";

class MyGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
    };
  }

  optionsMenu() {
    const data = this.state;
    return (
      <List>
        <ListItem>
          <ListItemAvatar>
            <AvatarBubble />
          </ListItemAvatar>
          <ListItemText primary="User's Dashboard" />
        </ListItem>
        <ListItem
          button
          selected={data.filter === "all"}
          onClick={(event) => {
            this.setState({ filter: "all" });
          }}
        >
          <ListItemText primary="All Groups" />
        </ListItem>
        <ListItem
          button
          selected={data.filter === "fal"}
          onClick={(event) => {
            this.setState({ filter: "fal" });
          }}
        >
          <ListItemText primary="Falling Behind" />
        </ListItem>
        <ListItem
          button
          selected={data.filter === "inp"}
          onClick={(event) => {
            this.setState({ filter: "inp" });
          }}
        >
          <ListItemText primary="In Progress" />
        </ListItem>
        <ListItem
          button
          selected={data.filter === "com"}
          onClick={(event) => {
            this.setState({ filter: "com" });
          }}
        >
          <ListItemText primary="Completed" />
        </ListItem>
        <h1> {data.filter} </h1>
      </List>

    );
  }

  groups() {
    const data = this.state;
    // POST = {JWT token, filter} RESPONSE = {group ids}
    const groupids = ["123", "456", "789", "123", "456", "789", "123", "456", "789"];
    return (
      <React.Fragment>
        <Grid container direction="row" xs={8} spacing={4} >
          {groupids.map((g) => (
            <Grid item xs={12} key={g} class = "delSides">
              <MyGroupsCard id={g} />
            </Grid>
          ))}
        </Grid>
      </React.Fragment>
    );
  }

  render() {
    return (
      <div class="covers greys">
        <Grid container>
          <Grid container xs={2} class="cooloor">
            <Grid item xs={12}>
              {this.optionsMenu()}
            </Grid>
          </Grid>
          <Grid container xs={1}/>
              {this.groups()}
          <Grid container xs={1}/>
        </Grid>
      </div>
    );
  }
}

export default MyGroups;
