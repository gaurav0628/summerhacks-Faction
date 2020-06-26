import React from "react";
import { Switch, Route } from "react-router-dom";
import { Grid } from "@material-ui/core";

// Pages & components
import Donate from "./Donate";
import Courses from "./Courses";
import About from "./About";
import NavBar from "../components/NavBar";
import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm";

//Style
import "./Landing.css";
import Typography from "@material-ui/core/Typography";

class Landing extends React.Component {
	render() {
		return (
			<>
				<NavBar />
				<Grid container direction="column">
					<Grid item container>
						<Grid
							item
							container
							xs={6}
							className="panels leftPanel"
						>
							<img
								src={require("../images/collaboration.jpg")}
								className="leftPanelImg"
							/>
							<Grid item xs={2}></Grid>
							<Grid item xs={8}>
								<div>
									<Typography
										variant="h3"
										gutterbottom
										className="missionTitle up"
									>
										JOIN A COLLABORATIVE COMMUNIT Y OF
										PROBLEM SOLVERS
									</Typography>
									<Typography
										variant="h5"
										gutterbottom
										className="missionTitle down"
									>
										We are commited to blah blah insert
										mission statement here. Collaboration.
										Working together. Team work. Use enough
										eye catching and trusting words that
										whoever actually glances at this for
										reasurance they should sign up, is
										convinced to sign up today.
									</Typography>
								</div>
							</Grid>
							<Grid item xs={2}></Grid>
						</Grid>
						<Grid item xs={6} className="panels">
							<Switch>
								<Route path="/about" component={About} />
								<Route path="/courses" component={Courses} />
								<Route path="/donate" component={Donate} />
								<Route
									path="/register"
									component={RegisterForm}
								/>
								<Route path="/" component={LoginForm} />
							</Switch>
						</Grid>
					</Grid>
				</Grid>
			</>
		);
	}
}

export default Landing;
