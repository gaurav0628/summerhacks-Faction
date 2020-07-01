import React from "react";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "../styles/dashbar.css";


class DashboardNavigationBar extends React.Component {
	render() {
		return (
			<AppBar position="static" class="cooloor">
				<Toolbar>
					<Button fullWidth color="inherit" component={Link} to="/explore">
						Explore Groups
					</Button>
					<Button fullWidth color="inherit" component={Link} to="/mygroups">
						My Groups
					</Button>
					<Button fullWidth color="inherit" component={Link} to="/profile">
						My Profile
					</Button>
				</Toolbar>
			</AppBar>
		);
	}
}

export default DashboardNavigationBar;
