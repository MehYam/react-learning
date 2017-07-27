class Portal extends React.Component {
	render() {
		return (
			<div>
				<h1>User Admin Portal</h1>
				<UserFilter/>
				<hr/>
				<UserTable/>
				<hr/>
				<UserAdd/>
			</div>
			);
	}
}

class UserFilter extends React.Component {
	render() {
		return <div>UserFilter</div>;
	}
}

class UserTable extends React.Component {
	render() {
		return <div>UserTable</div>;
	}
}

class UserAdd extends React.Component {
	render() {
		return <div>UserAdd</div>;
	}
}

ReactDOM.render(
  <Portal />,
  document.getElementById('main')
);