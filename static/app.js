class Portal extends React.Component {
	render() {
		return React.createElement(
			"div",
			{ className: "portal" },
			"Welcome to the user portal"
		);
	}
}

ReactDOM.render(React.createElement(Portal, null), document.getElementById('main'));