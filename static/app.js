class Portal extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			React.createElement(
				'h1',
				null,
				'User Admin Portal'
			),
			React.createElement(UserFilter, null),
			React.createElement('hr', null),
			React.createElement(UserTable, null),
			React.createElement('hr', null),
			React.createElement(UserAdd, null)
		);
	}
}

class UserFilter extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'UserFilter'
		);
	}
}

class UserTable extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'UserTable'
		);
	}
}

class UserAdd extends React.Component {
	render() {
		return React.createElement(
			'div',
			null,
			'UserAdd'
		);
	}
}

ReactDOM.render(React.createElement(Portal, null), document.getElementById('main'));