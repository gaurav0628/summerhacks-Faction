import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import AvatarGroup from "@material-ui/lab/AvatarGroup";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 200,
    height: 150,
    borderRadius: 0,
  },
  greenRed: {
    background: "red",
    border: 0,
    borderRadius: 0,
    boxShadow: 0,
    color: "white",
    height: 30,
  },
  title: {
    color: 151212,
  },
});

export default function MyGroupsCard(props) {
  const classes = useStyles();
  const [id, set_id] = useState(props.id);
  const [name, set_name] = useState(null);
  const [status, set_status] = useState(null);
  const [todo, set_todo] = useState(null);
  const [office, set_office] = useState(null);
  useEffect(() => {
    set_name(id + "Algorithms, MITOpenCourseWare");
    set_status("Overdue");
    set_todo("6/18: Write Paper 6/22: Final Project");
    set_office("Monday 6-8 pm CST");
  });
  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid container xs={4}>
            <Typography className={classes.title} variant="h5">
              <strong>{name}</strong>
            </Typography>
            <Button color="inherit" component={Link} to={"/group/" + id}>
              Link to the actual Group page
            </Button>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
              <Button className={classes.greenRed}>{status}</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                {todo}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                Office Hours here: {office}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                Whos online here:
              </Typography>

              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar
                  alt="Trevor Henderson"
                  src="/static/images/avatar/5.jpg"
                />
              </AvatarGroup>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
