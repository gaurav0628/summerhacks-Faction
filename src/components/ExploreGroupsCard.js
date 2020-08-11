import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

function ExploreGroupsCard(props) {
  // We can make it so it outputs cuter later I guess.
  function date(str){
    var correct = str.substring(0, str.indexOf("T"));
    return correct;
  }
  //Dont roast me for not using a dictionary .<.
  var name = props.course_name;
  var link = props.course_link;
  var start = date(props.date_started);
  var end = date(props.expected_end_date);
  //I dont know what I'm supposed to do with these :E
  var memberEmails = props.member_list_emails;
  var memberNames = props.member_list_names;

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={8} spacing={1} container>
            <Grid item xs={12}>
              <Typography variant="h4">
                <strong>{name}</strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                <strong> {start} -> {end} </strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6">
                <strong>15/20 enrolled </strong>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item xs={1} />
              <Grid item xs={12}>
                <Button
                  fullWidth
                  variant="contained"
                  color="secondary"
                  disableElevation
                >
                  Enroll In Course
                </Button>
              </Grid>
              <Grid item xs={12}>
                <Typography>
                  <Link href= {link}>
                    Visit Course
                  </Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}

export default ExploreGroupsCard;
