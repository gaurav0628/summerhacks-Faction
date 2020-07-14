import React from "react";
import { Grid } from "@material-ui/core";

import "../styles/dashbar.css";
import AvatarBubble from "./AvatarBubble";
import ProfileTextBox from "./ProfileTextBox";

class Profile extends React.Component {
  render() {
    return(
    <Grid container>
      <Grid container xs={3}>
      <img
        src={require("../images/People-with-Activity.jpg")}
        class = "background-panel"
      />
      </Grid>
      <Grid container direction="column" xs={6}>
        <Grid item>
          <AvatarBubble></AvatarBubble>
        </Grid>
        <Grid item>
          <ProfileTextBox>Name</ProfileTextBox>
          <ProfileTextBox>Name</ProfileTextBox>
          <ProfileTextBox>Name</ProfileTextBox>
          <ProfileTextBox>Name</ProfileTextBox>
        </Grid>
      </Grid>
      <Grid container xs={3}>
      <img
        src={require("../images/People-with-Activity.jpg")}
        class = "background-panel"
      />
      </Grid>
    </Grid>
    )
  }
}

export default Profile;
