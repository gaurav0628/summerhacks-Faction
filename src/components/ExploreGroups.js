import React from "react";

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

class ExploreGroups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "Dog",
      searchResults: [{"_id":"5f2b43cf21827be9ff68d5ca","course_name":"Dog Walking","member_list_names":"gauravthapliyal1111@gmail.com","member_list_emails":"GauravThapliyal","course_link":"https://www.abc.com","date_started":"2020-08-04T04:00:00.000Z","expected_end_date":"2020-09-04T04:00:00.000Z","__v":0},{"_id":"5f2dddaaf501fa9753514ec2","course_name":"Dog Walking 2","member_list_names":"gauravthapliyal1111@gmail.com","member_list_emails":"GauravThapliyal","course_link":"https://www.abc.com","date_started":"2020-08-04T04:00:00.000Z","expected_end_date":"2020-09-04T04:00:00.000Z","__v":0}],
    };
    this.searchRequest = this.searchRequest.bind(this);
  }
  async searchRequest() { // when called, it will send a search request for the string in this.state.searchText and update searchResults.
    var qs = require("qs");
    var data = qs.stringify({
      search_text: this.state.searchText,
    });
    var config = {
      method: "post",
      url: KEYS.APIURL + "/groups-api/search",
      headers: {
        "x-auth-token": KEYS.DEVTOKEN,
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


   exGroups(){
    var populatedCards = []

    for (var cards of this.state.searchResults){
        populatedCards.push(ExploreGroupsCard(cards));
        console.log(cards);
    }
     return(populatedCards);


  }

  render() {
    return (
      <div>
        <Button color="inherit" onClick={this.searchRequest}>
          This button is just for testing searchRequest method
        </Button>



        <Grid container spacing={5} justify="center" alignItems="center">
          <Grid item xs={12} />
          <Grid item xs={12} />
          <Grid item xs={3}/>
          <Grid item xs={6} >
            <div className="searchBar">
              <InputBase fullWidth placeholder=" Find your next group..." />
            </div>
          </Grid>
          <Grid item xs={1}>
            <IconButton variant="contained" color="primary">
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}/>

          <Grid item xs={5}/>
          <Grid item xs={2} >
          <Typography align="center">or</Typography>
            <Button color="inherit" component={Link} to="/create">
              Create New Group
            </Button>
          </Grid>
          <Grid item xs={5}/>

          <Grid item xs={8}>
            {this.exGroups()}
          </Grid>


        </Grid>
      </div>
    );
  }
}

export default ExploreGroups;
