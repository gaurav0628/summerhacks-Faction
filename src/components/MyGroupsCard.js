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


export default function MyGroupsCard(props) {
  function date(str) {
    var correct = str.substring(0, str.indexOf("T"));
    return correct;
  }

  const id = props.info.id;
  const link = props.info.id;
  const expected_end_date = date(props.info.expected_end_date);
  const date_started = date(props.info.date_started);
  const course_name = props.info.course_name;
  const status = props.info.status;
  const assignments_list = props.info.assignments_list;

  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={6} spacing={1} container>
            <Grid item xs={12}>
              <Typography variant="h4">
                <strong>{course_name}</strong>
              </Typography>
            </Grid>
          </Grid>


          <Grid item xs={3} spacing={1} container >
            <Grid item xs={12}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
              >
                {status}
              </Button>
            </Grid>
            <Grid item xs={12}>
              {assignments_list.split("\n").map((item, i) => (
                <div key={i}>
                  <Typography variant="subtitle1">{item}</Typography>
                </div>
              ))}
            </Grid>
          </Grid>


          <Grid item xs={3}>
            <Grid container direction="column" alignItems="center" spacing={2}>
              <Grid item xs={12}>
                <Typography variant="body1"> Start Date: {date_started} </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="body1"> End Date: {expected_end_date} </Typography>
              </Grid>
               <Grid item xs={12}>
                <Button color="inherit" component={Link} to={"/group/" + id}> Visit Group </Button>
              </Grid>             
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );

  // return (
  //   <Card className={classes.root}>
  //     <CardContent>
  //       <Grid container alignItems="center">
  //         <Grid container xs={4}>
  //           <Typography className={classes.title} variant="h5">
  //             <strong>{course_name}</strong>
  //           </Typography>
  //           <Button color="inherit" component={Link} to={"/group/" + id}>
  //             Visit Group
  //           </Button>
  //         </Grid>

  //         <Grid container direction="row" xs={4}>
  //           <Grid item xs={12}>
  //             <Button className={classes.greenRed}>{status}</Button>
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Typography color="textSecondary" gutterBottom>
  //               {assignments}
  //             </Typography>
  //           </Grid>
  //         </Grid>

  //         <Grid container direction="row" xs={4}>
  //           <Grid item xs={12}>
  //             <Typography color="textSecondary" gutterBottom>
  //               Start Date: {date_started}
  //             </Typography>
  //           </Grid>
  //           <Grid item xs={12}>
  //             <Typography color="textSecondary" gutterBottom>
  //               End Date: {expected_end_date}
  //             </Typography>
  //           </Grid>
  //         </Grid>
  //       </Grid>
  //     </CardContent>
  //   </Card>
  // );
}
