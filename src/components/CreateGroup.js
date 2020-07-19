import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

class CreateGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: "",
      link: "",
      startDate: "1999-12-31",
      endDate: "1999-12-31",
      aList: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    const data = this.state;
    alert(data.courseName);
    alert(data.link);
    alert(data.startDate);
    alert(data.endDate);
    alert(data.aList);
    this.setState({
      courseName: "",
      link: "",
      startDate: "1999-12-31",
      endDate: "1999-12-31",
      aList: "",
    });
  }
  render() {
    const data = this.state;
    return (
      <Grid container direction="row" justify="center" spacing={2}>
        <Grid item xs={12} />
        <Grid item xs={12} />
        <Grid item xs={7}>
          <TextField
            type="text"
            onChange={this.handleChange}
            fullWidth
            variant="outlined"
            label="Name of Course"
            name="courseName"
            value={data.courseName}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            type="text"
            onChange={this.handleChange}
            fullWidth
            variant="outlined"
            label="Link to Course"
            name="link"
            value={data.link}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            type="date"
            onChange={this.handleChange}
            fullWidth
            variant="outlined"
            label="Start Date"
            name="startDate"
            value={data.startDate}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            type="date"
            onChange={this.handleChange}
            fullWidth
            variant="outlined"
            label="End Date"
            name="endDate"
            value={data.endDate}
          />
        </Grid>
        <Grid item xs={7}>
          <TextField
            type="text"
            onChange={this.handleChange}
            fullWidth
            variant="outlined"
            multiline
            rows={1}
            rowsMax={50}
            label="Enter all assignments (one per line)"
            name="aList"
            value={data.aList}
          />
        </Grid>
        <Grid item xs={7}>
          <Button
            variant="contained"
            color="secondary"
            onClick={this.handleSubmit}
            fullWidth
          >
            Create Course
          </Button>
        </Grid>
      </Grid>
    );
  }
}

export default CreateGroup;
