const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World - from webapp.js')
// })

app.use(express.static('static'));

app.get('/api/users', (req, res) => res.status(200).send(JSON.stringify(users[requests++ % users.length])) );

app.listen(3000, () => console.log('Example app listening on port 3000!'));

var requests = 0;
var users = 
[
    {id:"1", firstName: "Kai", lastName: "Arnold"},
    {id:"2", firstName: "Kira", lastName: "Tsu"},
    {id:"3", firstName: "Piper", lastName: "BoBo"}
];
