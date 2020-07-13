import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

function ExploreGroupsCard(props) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Grid container direction="row" alignItems="center">
          <Grid item xs={8} spacing={1} container>
            <Grid item xs={12}>
              <Typography variant="h4">
                <strong>Machine Learning, Coursera </strong>
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5">
                <strong> June 6, 2020 - September 10, 2020 </strong>
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
                  <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
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
