import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

import KEYS from "../keys.js";

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
    var axios = require("axios");
    var qs = require("qs");
    var data = qs.stringify({
      course_name: this.state.courseName,
      course_link: this.state.link,
      date_started: this.state.startDate,
      expected_end_date: this.state.endDate,
      assignments_list: this.state.aList,
      first_name: localStorage.getItem("first_name"),
      last_name: localStorage.getItem("last_name"),
      email: localStorage.getItem("email"),
    });
    var config = {
      method: "post",
      url: KEYS.APIURL + "/groups-api/writeGroups",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };

    console.log(config);

    axios(config)
      .then(function (response) {
        alert("Success!");
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert("Error");
        if (error.response) {
          console.log("ERROR: Request made; server responded");
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else if (error.request) {
          console.log("ERROR: Request made; No response received");
          console.log(error.request);
        } else {
          console.log("ERROR: Setting up the request triggered an Error");
          console.log(error.message);
        }
      });
    this.setState ({
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
