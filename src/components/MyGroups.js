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
import { withStyles } from "@material-ui/core/styles";

import MyGroupsCard from "../components/MyGroupsCard";
import AvatarBubble from "../components/AvatarBubble";
//import "../styles/dashbar.css";
import KEYS from "../keys.js";

const WhiteTextTypography = withStyles({
  root: {
    color: "#FFFFFF",
  },
})(Typography);

class MyGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: "all",
      courseInfo: [],
    };
    this.request = this.request.bind(this);
    this.request();
  }

  async request() {
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      email: localStorage.getItem("email"),
    });

    var config = {
      method: "post",
      url: KEYS.APIURL + "/courses-api/getCourses",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    console.log(config);

    let results = null;
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        results = response.data;
      })
      .catch(function (error) {
        if (error.response) {
          console.log("ERROR: Request made; server responded");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("ERROR: Request made; No response received");
          console.log(error.request);
        } else {
          console.log("ERROR: Setting up the request triggered an Error");
          console.log(error.message);
        }
      });

    if (results) {
      this.setState({ courseInfo: results });
    } else {
      alert("error retrieving");
    }
  }

  optionsMenu() {
    const data = this.state;
    return (
      <List class="cov">
        <ListItem>
          <WhiteTextTypography variant="h4">{localStorage.getItem("first_name") + "'s Dashboard"}</WhiteTextTypography>
        </ListItem>
        <ListItem
          button
          selected={data.filter === "all"}
          onClick={(event) => {
            this.setState({ filter: "all" });
          }}
        >
          <WhiteTextTypography variant="h6">All Groups</WhiteTextTypography>
        </ListItem>
        <ListItem
          button
          selected={data.filter === "fal"}
          onClick={(event) => {
            this.setState({ filter: "fal" });
          }}
        >
          <WhiteTextTypography variant="h6">Fall Behind Groups</WhiteTextTypography>
        </ListItem>
        <ListItem
          button
          selected={data.filter === "inp"}
          onClick={(event) => {
            this.setState({ filter: "inp" });
          }}
        >
          <WhiteTextTypography variant="h6">In Progress Groups</WhiteTextTypography>
        </ListItem>
        <ListItem
          button
          selected={data.filter === "com"}
          onClick={(event) => {
            this.setState({ filter: "com" });
          }}
        >
          <WhiteTextTypography variant="h6">Completed Groups</WhiteTextTypography>
        </ListItem>
      </List>
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
          <Grid container xs={1} />

          <Grid container direction="row" xs={8} spacing={4}>
            <Grid item xs={12} />
            {this.state.courseInfo.map((c, index) => (
              <Grid item xs={12} key={index}>
                <MyGroupsCard info={c} />
              </Grid>
            ))}
          </Grid>
          <Grid container xs={1} />
        </Grid>
      </div>
    );
  }
}

export default MyGroups;
