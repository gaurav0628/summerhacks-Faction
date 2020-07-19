import React from "react";

import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

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
      </div>
    );
  }
}

export default GroupView;
