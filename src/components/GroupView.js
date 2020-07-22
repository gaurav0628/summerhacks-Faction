import React from "react";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Divider from '@material-ui/core/Divider';
import Graph from "../components/progressGraph";
import Button from "@material-ui/core/Button";


class GroupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completionStatus: [false, false, true, true],
      assignmentName: ["Module 0", "Module 1", "Module 2", "Do Some Shit"],
      courseName: "Machine Learning, Coursera",
      dateString: "June 6, 2020 - September 10, 2020",
      courseLink: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const idx = event.target.name;
    const completionStatus = this.state.completionStatus.slice();
    completionStatus[idx] = !completionStatus[idx];
    this.setState({ completionStatus: completionStatus });
    console.log(completionStatus);
    console.log(this.state.completionStatus);
    // also send completionStatus (note this.state.completionStatus) to backend
  }
  render() {
    return (
      <div>
        <Grid container>
          <Grid container xs={2}>
          </Grid>

          <Grid container direction = "column" xs={8}>
            <Grid container direction = "row">
                <Grid container xs={8}>

                  <Typography variant="h4">
                    <strong>{this.state.courseName}</strong>
                  </Typography>
                  <Typography variant="h5">
                    <strong>{this.state.dateString} </strong>
                  </Typography>
                  <Typography>
                    <Link href={this.state.courseLink}>Go To Course!</Link>
                  </Typography>

                  <FormControl component="fieldset">
                    {this.state.completionStatus.map((status, index) => (
                      <FormControlLabel
                        key={index}
                        control={
                          <Checkbox
                            checked={this.state.completionStatus[index]}
                            onChange={this.handleChange}
                            name={index}
                          />
                        }
                        label={this.state.assignmentName[index]}
                      />
                    ))}
                  </FormControl>

                </Grid>

                <Grid container xs={4}>
                <img
                  src={require("../images/illustrations.png")} height="100%" width = "100%"/>
                </Grid>
            </Grid>
            <hr/>
            <Divider />
            <hr/>
            <Grid container direction = "column">
              <Grid item>
                <Graph/>
              </Grid>

              <Grid container directon = "row">
                <Grid item xs = {2}/>
                <Grid item xs = {8}>
                    <Divider light />
                    <Typography variant="h5">
                      “nothing ever got accomplished by quitting” -unkown
                    </Typography>
                    <Divider light />
                </Grid>
                <Grid item xs = {2}/>

              </Grid>

              <Grid container directon = "row">
              <Grid item xs = {4}/>
              <Grid item xs = {4}>
              <Button
                variant="contained"
                color="secondary"
                onClick={this.handleSubmit}
                fullWidth
              >
                Drop Course
              </Button>
              </Grid>
              <Grid item xs = {4}/>
              </Grid>
            </Grid>

          </Grid>

          <Grid container xs={2}>
          </Grid>



        </Grid>



      </div>
    );
  }
}

export default GroupView;
