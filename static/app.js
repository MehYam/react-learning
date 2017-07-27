function Portal() {
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
        React.createElement(UserTable, null),
        React.createElement("hr", null),
        React.createElement(UserAdd, null)
    );
}

class UserFilter extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "UserFilter"
        );
    }
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
    constructor() {
        super();
        this.state = {
            users: [{ "id": "1", "firstName": "Kai", "lastName": "Arnold" }, { "id": "2", "firstName": "Kira", "lastName": "Tsu" }, { "id": "3", "firstName": "Piper", "lastName": "BoBo" }]
        };
    }
    renderRow(user) {
        return React.createElement(UserRow, { key: user.id, id: user.id, lastName: user.lastName, firstName: user.firstName });
    }
    foo() {
        return 3;
    }
    render() {
        var renderRowCapture = this.renderRow;
        var userRows = this.state.users.map(renderRowCapture);
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