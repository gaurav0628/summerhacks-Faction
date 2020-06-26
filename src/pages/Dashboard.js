import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

class Dashboard extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			first_name: "Jason",
			last_name: "Yuan",
			user_id: "123456",
			groups: ["123", "456"],
		};
	}

	/*	componentDidMount() {

		// psot for data
		alert("mounted dashboard");
		var axios = require("axios");
		var config = {
			method: "post",
			url:
				"https://cors-anywhere.herokuapp.com/https://faction-dev.herokuapp.com/api/user-api/login",
			headers: {
				"Content-Type": "application/json",
			},
			data: this.state,
		};

		axios(config)
			.then(function (response) {
				alert("success, check console");
				console.log(JSON.stringify(response.data));
			})
			.catch(function (error) {
				alert("was an error, check console");
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
	}*/

	render() {
		const auth_token = localStorage.getItem("author-token");
		if (!auth_token) {
			alert("need to login first yo");
		}
		const { first_name, last_name, groups } = this.state;
		return (
			<div>
				<h1> Welcome, {first_name + " " + last_name} </h1>
				<h1> Your Login token is {" " + auth_token} </h1>
				<h1> Group ID's </h1>
				<ul>
					{groups.map((id) => (
						<li key={id}>{id}</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Dashboard;
