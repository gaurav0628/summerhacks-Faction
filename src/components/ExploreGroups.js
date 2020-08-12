import React, { Fragment } from "react";

import { Link } from "react-router-dom";

import Button from "@material-ui/core/Button";
import { Input, InputBase } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import axios from "axios";
import Typography from "@material-ui/core/Typography";

import ExploreGroupsCard from "./ExploreGroupsCard";
import "../styles/searchBar.css";
import KEYS from "../keys.js";

function equals(obj1, obj2) {
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

class SearchResults extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return !equals(nextProps, this.props);
  }
  render() {
    return (
      <React.Fragment>
        {this.props.data.map((result, index) => (
          <Grid item xs={8} key={index}>
            {ExploreGroupsCard(result)}
          </Grid>
        ))}
      </React.Fragment>
    );
  }
}

class ExploreGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchResults: [],
    };
    this.searchRequest = this.searchRequest.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  }
  async searchRequest() {
    console.log("searchtext: " + this.state.searchText);
    // when called, it will send a search request for the string in this.state.searchText and update searchResults.
    var qs = require("qs");
    var data = qs.stringify({
      search_text: this.state.searchText,
    });
    var config = {
      method: "post",
      url: KEYS.APIURL + "/groups-api/search",
      headers: {
        "x-auth-token": localStorage.getItem("auth-token"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: data,
    };
    let results = null;
    await axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        results = response.data;
      })
      .catch(function (error) {
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
    console.log(results);
    if (results) {
      this.setState({ searchResults: results });
      let tmp = this.state.searchResults
        .map(function (a) {
          return a.course_name;
        })
        .join();
      console.log(tmp);
    }
    console.log(this.state.searchResults);
  }
  render() {
    const searchData = this.state.searchResults;
    return (
      <div>
        <Grid container   direction="row" spacing={3} justify="center" alignItems="center">
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={6}>
            <div className="searchBar">
              <InputBase
                fullWidth
                placeholder=" Find your next group..."
                name="searchText"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
            </div>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              variant="contained"
              color="primary"
              onClick={this.searchRequest}
            >
              <SearchIcon />
            </IconButton>
          </Grid>

          <Grid container item xs={10} justify="center" alignItems="center">
            <Button color="inherit" component={Link} to="/create">
              Or... Create Your Own Group
            </Button>
          </Grid>

          <SearchResults data={searchData} />
        </Grid>
      </div>
    );
  }
}

export default ExploreGroups;
