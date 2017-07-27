var sampleData = 
[
	{"id":"1", "firstName": "Kai", "lastName": "Arnold"},
	{"id":"2", "firstName": "Kira", "lastName": "Tsu"},
	{"id":"3", "firstName": "Piper", "lastName": "BoBo"}
];


class Portal extends React.Component {
	render() {
		return (
			<div>
				<h1>User Admin Portal</h1>
				<UserFilter/>
				<hr/>
				<UserTable users={sampleData}/>
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

class UserRow extends React.Component {
	render() {
		return (
			<tr>
				<td>{this.props.id}</td>
				<td>{this.props.lastName}</td>
				<td>{this.props.firstName}</td>
			</tr>
		);
	}
}

class UserTable extends React.Component {
	constructor() {
		super();
		this.state = {
			users: Array(2).fill(null)
		};
	}
	renderRow(user) {
		return <UserRow key={user.id} id={user.id} lastName={user.lastName} firstName={user.firstName}/>;
	}
	render() {
		var userRows = this.props.users.map(function(user) { return <UserRow key={user.id} id={user.id} lastName={user.lastName} firstName={user.firstName}/> } );
		//var users = this.props.users;
		return (
			<table>
				<thead>
					<tr>
						<th>ID</th>
						<th>Last</th>
						<th>First</th>
					</tr>
				</thead>
				<tbody>
					{userRows}
				</tbody>
			</table>
		);
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