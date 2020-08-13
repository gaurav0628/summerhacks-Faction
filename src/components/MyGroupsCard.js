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

  function date(str) {
    var correct = str.substring(0, str.indexOf("T"));
    return correct;
  }

  const id = props.info.id;
  const expected_end_date = date(props.info.expected_end_date);
  const date_started = date(props.info.date_started);
  const course_name = props.info.course_name;
  const status = props.info.status;
  const assignments_list = props.info.assignments_list;
  const assignments = assignments_list
    .split("\n")
    .map((item, i) => <div key={i}>{item}</div>);

  return (
    <Card className={classes.root}>
      <CardContent>
        <Grid container alignItems="center">
          <Grid container xs={4}>
            <Typography className={classes.title} variant="h5">
              <strong>{course_name}</strong>
            </Typography>
            <Button color="inherit" component={Link} to={"/group/" + id}>
              Visit Group
            </Button>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
              <Button className={classes.greenRed}>{status}</Button>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                {assignments}
              </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                Start Date: {date_started}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography color="textSecondary" gutterBottom>
                End Date: {expected_end_date}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}
