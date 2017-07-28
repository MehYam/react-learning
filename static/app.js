class Portal extends React.Component {
   constructor() {
      super();
      this.state = { users: [] };
   }
   componentDidMount() {
      $.ajax('/api/users/getAll').done(function (userArray) {
         this.setState({ users: JSON.parse(userArray) });
      }.bind(this));
   }
   addUser(user) {
      var newUsers = this.state.users.slice();
      user.id = newUsers.length + 1;
      newUsers.push(user);

      this.setState({ users: newUsers });
   }
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
         React.createElement(UserTable, { users: this.state.users }),
         React.createElement('hr', null),
         React.createElement(UserAdd, { onSubmit: u => this.addUser(u) })
      );
   }
}

function UserFilter() {
   return React.createElement(
      'div',
      null,
      'UserFilter'
   );
}

function UserRow(props) {
   return React.createElement(
      'tr',
      null,
      React.createElement(
         'td',
         null,
         props.id
      ),
      React.createElement(
         'td',
         null,
         props.lastName
      ),
      React.createElement(
         'td',
         null,
         props.firstName
      )
   );
}

class UserTable extends React.Component {
   renderRow(user) {
      return React.createElement(UserRow, { key: user.id, id: user.id, lastName: user.lastName, firstName: user.firstName });
   }
   render() {
      var renderRowCapture = this.renderRow;
      var userRows = this.props.users.map(renderRowCapture);
      return React.createElement(
         'table',
         null,
         React.createElement(
            'thead',
            null,
            React.createElement(
               'tr',
               null,
               React.createElement(
                  'th',
                  null,
                  'ID'
               ),
               React.createElement(
                  'th',
                  null,
                  'Last'
               ),
               React.createElement(
                  'th',
                  null,
                  'First'
               )
            )
         ),
         React.createElement(
            'tbody',
            null,
            userRows
         )
      );
   }
}

class UserAdd extends React.Component {
   constructor(props) {
      super(props);
      this.state = { value: '' };

      this.handleSubmit = this.handleSubmit.bind(this);
   }

   handleSubmit(e) {
      e.preventDefault();

      var form = document.forms.userAdd;
      var user = { firstName: form.first.value, lastName: form.last.value };

      this.props.onSubmit(user);
   }

   render() {
      return React.createElement(
         'div',
         null,
         React.createElement(
            'form',
            { name: 'userAdd', onSubmit: this.handleSubmit },
            React.createElement('input', { type: 'text', name: 'first', placeholder: 'first name', defaultValue: 'foo' }),
            React.createElement('input', { type: 'text', name: 'last', placeholder: 'last name', defaultValue: 'bar' }),
            React.createElement('input', { type: 'submit', value: 'Add User' })
         )
      );
   }
}

ReactDOM.render(React.createElement(Portal, null), document.getElementById('main'));