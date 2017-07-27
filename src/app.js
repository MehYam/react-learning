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
   addUser(user) {
      var newUsers = this.state.users.slice();
      user.id = newUsers.length + 1;
      newUsers.push(user);

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
            <UserAdd onSubmit={(u) => this.addUser(u)}/>
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
   constructor(props) {
      super(props);
      this.state = {value: ''};

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();

      var form = document.forms.userAdd;
      var user = { firstName: form.first.value, lastName: form.last.value };

      this.props.onSubmit(user);
   }

   render() {
      return (
         <div>
            <form name="userAdd" onSubmit={this.handleSubmit}>
               <input type="text" name="first" placeholder="first name" defaultValue="foo"/>
               <input type="text" name="last"  placeholder="last name" defaultValue="bar"/>
               <input type="submit" value="Add User"/>
            </form>
         </div>
      );
   }
}

ReactDOM.render(
  <Portal />,
  document.getElementById('main')
);