import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    height: 130,
    borderRadius: 0,
  },
  greenRed: {
    background: 'red',
    border: 0,
    borderRadius: 0,
    boxShadow: 0,
    color: 'white',
    height: 30,
  },
  title: {
    color: 151212,
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
        <Grid container alignItems="center">


        <Grid container xs={4}>
            <Typography className={classes.title} variant = "h4" component="h2" >
              <strong>Udemy</strong>
            </Typography>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
            <Button className={classes.greenRed}>
              Overdue
            </Button>
            </Grid>
            <Grid item xs={12}>
            <Typography color="textSecondary" gutterBottom>
              TODO
            </Typography>
            </Grid>
          </Grid>

          <Grid container direction="row" xs={4}>
            <Grid item xs={12}>
              <Typography  color="textSecondary" gutterBottom>
                Office Hours here
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography  color="textSecondary" gutterBottom>
                Whos online here:
              </Typography>

              <AvatarGroup max={4}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
              </AvatarGroup>

            </Grid>
          </Grid>


          </Grid>
      </CardContent>
    </Card>
  );
}
