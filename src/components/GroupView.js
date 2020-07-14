import React from "react";

class GroupView extends React.Component {
	render() {
		return (
			<h1>
				{" "}
				Renders a specific group based off URL? + {
					window.location.href
				}{" "}
			</h1>
		);
	}
}

export default GroupView;
