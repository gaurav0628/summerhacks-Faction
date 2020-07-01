import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 110,
  },
  title: {
    fontSize: 12,
  },
  pos: {
    marginBottom: 12,
  },
});


export default function SimpleCard() {
  const classes = useStyles();
  return (

    <Card className = {classes.root}>
      <CardContent>
        <Grid container>
        <Grid item xs={4}>
            <Typography variant = "h5" component="h2" >
              Udemy
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography  className={classes.title} color="textSecondary" gutterBottom>
              second column here
            </Typography>
          </Grid>

          <Grid item xs={4}>
            <Typography  color="textSecondary">
              third column here
            </Typography>
          </Grid>
          </Grid>
      </CardContent>
    </Card>
  );
}
