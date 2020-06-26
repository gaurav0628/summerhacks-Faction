import React from "react";
import { Switch, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
	render() {
		// return <Landing />;
		return (
			<Switch>
				<Route path="/dashboard" component={Dashboard} />
				<Route path="/" component={Landing} />
			</Switch>
		);
	}
}

export default App;
