import React from "react";

import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Divider from "@material-ui/core/Divider";
import Graph from "../components/progressGraph";
import Button from "@material-ui/core/Button";

class GroupView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      completionStatus: [true,true,true,true,true,false,false,false,false,false,false,false,false,false,false,false,false,false],
      assignmentName: ["Introduction","Linear Regression with One Variable","Linear Algebra Review","Linear Regression with Multiple Variables","Octave/Matlab Tutorial","Logistic Regression","Regularization","Neural Networks: Representation","Neural Networks: Learning","Advice for Applying Machine Learning","Machine Learning System Design","Support Vector Machines","Unsupervised Learning","Dimensionality Reduction","Anomaly Detection","Recommender Systems","Large Scale Machine Learning","Application Example: Photo OCR"],
      courseName: "Machine Learning, Coursera",
      dateString: "June 6, 2020 - September 10, 2020",
      courseLink: "https://www.coursera.org/learn/machine-learning",
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
          <Grid container xs={2}></Grid>

          <Grid container direction="column" xs={8}>
            <Grid container direction="row">
              <Grid container xs={8}>
                <Grid item xs={8}>
                  <Typography variant="h4">
                    <strong>{this.state.courseName}</strong>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography variant="h5">
                    <strong>{this.state.dateString} </strong>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
                  <Typography>
                    <Link href={this.state.courseLink}>Go To Course!</Link>
                  </Typography>
                </Grid>
                <Grid item xs={8}>
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
              </Grid>

              <Grid container xs={4}>
                <img
                  src={require("../images/illustrations.png")}
                  height="50%"
                  width="100%"
                />
              </Grid>
            </Grid>
            <hr />
            <Divider />
            <hr />
            <Grid container direction="column">
              <Grid item>
                <Graph />
              </Grid>

              <hr />
              <Divider />
              <hr />

            </Grid>
          </Grid>

          <Grid item container directon="row" justify="center" alignItems="center" spacing={3}>
            <Grid item xs={1}>
              <Typography variant="body2">
                “Nothing ever got accomplished by quitting” - unknown
              </Typography>
            </Grid>

            <Grid item xs={1}>
              <Button
                variant="contained"
                color="secondary"
                disableElevation
                onClick={this.handleSubmit}
              >
                Drop Course
              </Button>
            </Grid>
          </Grid>

          <Grid container xs={2}></Grid>
        </Grid>
      </div>
    );
  }
}

export default GroupView;
