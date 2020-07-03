import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from '@material-ui/core/Typography';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';


import DashboardNavigationBar from "../components/DashboardNavigationBar";
import Example from "./Example";
import ClassCard from "../components/ClassCard";
import "../styles/dashbar.css";
import AvatarBubble from "../components/AvatarBubble";

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
            <AvatarBubble/>
          </ListItemAvatar>
          <ListItemText primary="User's Dashboard"/>
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
      </List>
    );
  }
  groups() {
    // POST = {JWT token, filter} RESPONSE = {group ids}
    const data = this.state;
    return <h1> groups filter: {data.filter}</h1>;
  }
  render() {
    return (
      <div class="greys">
      <Grid container>
       <Grid container xs={2} class = "cooloor">
        <Grid item xs={12}>
          {this.optionsMenu()} {this.groups()}
          </Grid>
        </Grid>

        <Grid container xs={1}/>
        <Grid container direction = "row"  xs={8} spacing={4}>
        <Grid item xs={12}>
          <Typography>My Groups: </Typography>
        </Grid>
          <Grid item xs={12}>
            <ClassCard/>
          </Grid>
          <Grid item xs={12}>
            <ClassCard/>
          </Grid>
          <Grid item xs={12}>
            <ClassCard/>
          </Grid>
          </Grid>
        <Grid container xs={1}/>

        </Grid>
      </div>
    );
  }
}

class Dashboard extends React.Component {
  render() {
    //  return <Example />; // what the styling should look like
    return (
      <div>
        <DashboardNavigationBar />

              <Switch>
                <Route path="/explore" component={() => <h1> explore </h1>} />
                <Route path="/profile" component={() => <h1> profile </h1>} />
                <Route path="/" component={() => <MyGroups />} />
              </Switch>

      </div>
    );
  }
}

export default Dashboard;
