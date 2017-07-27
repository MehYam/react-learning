class Portal extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [{ "id": "1", "firstName": "Kai", "lastName": "Arnold" }, { "id": "2", "firstName": "Kira", "lastName": "Tsu" }, { "id": "3", "firstName": "Piper", "lastName": "BoBo" }]
        };
    }
    addUser() {
        console.log("addUser.this: " + this);
        var newUsers = this.state.users.slice();
        newUsers.push({ "id": "4", "firstName": "foo", "lastName": "bar" });
        this.setState({ users: newUsers });
    }
    render() {
        return React.createElement(
            "div",
            null,
            React.createElement(
                "h1",
                null,
                "User Admin Portal"
            ),
            React.createElement(UserFilter, null),
            React.createElement("hr", null),
            React.createElement(UserTable, { users: this.state.users }),
            React.createElement("hr", null),
            React.createElement(UserAdd, null),
            React.createElement(
                "button",
                { onClick: () => this.addUser() },
                "Add User"
            )
        );
    }
}

function UserFilter() {
    return React.createElement(
        "div",
        null,
        "UserFilter"
    );
}

function UserRow(props) {
    return React.createElement(
        "tr",
        null,
        React.createElement(
            "td",
            null,
            props.id
        ),
        React.createElement(
            "td",
            null,
            props.lastName
        ),
        React.createElement(
            "td",
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
            "table",
            null,
            React.createElement(
                "thead",
                null,
                React.createElement(
                    "tr",
                    null,
                    React.createElement(
                        "th",
                        null,
                        "ID"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "Last"
                    ),
                    React.createElement(
                        "th",
                        null,
                        "First"
                    )
                )
            ),
            React.createElement(
                "tbody",
                null,
                userRows
            )
        );
    }
}

class UserAdd extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "UserAdd"
        );
    }
}

ReactDOM.render(React.createElement(Portal, null), document.getElementById('main'));