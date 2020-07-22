import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import "../styles/dashbar.css";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import ProfileTextBox from "./ProfileTextBox";
import ProfileAvatar from "./ProfileAvatar";


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
        <Grid container>
          <Grid item xs={3} />
          <Grid item xs={6}>
            <ProfileAvatar/>
          </Grid>
          <Grid item xs={3}/>
        </Grid>
        <Grid container>
        <Grid container direction="column" xs={4}>

        <Typography color="textSecondary" class = "push"> Name </Typography>
        <Typography color="textSecondary" class = "push"> E-mail </Typography>
        <Typography color="textSecondary" class = "push"> Current-Password </Typography>
        <Typography color="textSecondary" class = "push"> New-Password </Typography>
        <Typography color="textSecondary" class = "push"> Confirm New-Password </Typography>

        </Grid>
        <Grid container direction="column" xs={8}>

        <ProfileTextBox>Name</ProfileTextBox>
        <ProfileTextBox>Name</ProfileTextBox>
        <ProfileTextBox>Name</ProfileTextBox>
        <ProfileTextBox>Name</ProfileTextBox>
        <ProfileTextBox>Name</ProfileTextBox>

        </Grid>

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
