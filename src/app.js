class Portal extends React.Component
{
   constructor() {
      super();
      this.state = {
         users: 
         [
             {"id":"1", "firstName": "Kai", "lastName": "Arnold"},
             {"id":"2", "firstName": "Kira", "lastName": "Tsu"},
             {"id":"3", "firstName": "Piper", "lastName": "BoBo"}
         ]
      };
   }
   addUser() {
      console.log("addUser.this: " + this);
      var newUsers = this.state.users.slice();
      newUsers.push({"id":"4", "firstName": "foo", "lastName": "bar"});
      this.setState({users: newUsers});
   }
   render()
   {
      return (
        <div>
            <h1>User Admin Portal</h1>
            <UserFilter/>
            <hr/>
            <UserTable users={this.state.users}/>
            <hr/>
            <UserAdd/>
            <button onClick={() => this.addUser()}>Add User</button>
        </div>
      );
   }
}

function UserFilter() {return <div>UserFilter</div>;}

function UserRow(props)
{
    return (
        <tr>
            <td>{props.id}</td>
            <td>{props.lastName}</td>
            <td>{props.firstName}</td>
        </tr>
    );
}

class UserTable extends React.Component {
    renderRow(user) {
        return <UserRow key={user.id} id={user.id} lastName={user.lastName} firstName={user.firstName}/>;
    }
    render() {
        var renderRowCapture = this.renderRow;
        var userRows = this.props.users.map(renderRowCapture);
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