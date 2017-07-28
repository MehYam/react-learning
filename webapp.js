const express = require('express')
const app = express()

class Users {
   constructor() {
      this.users = [];
      this.currentID = 0;
   }
   add(user) {
      user.id = this.currentID++;
      this.users.push(user);
   }
   get list() { return this.users; }
   get JSON() { return JSON.stringify(this.users); }
}

let users = new Users();
users.add({firstName: "Kai", lastName: "Arnold"});
users.add({firstName: "Kira", lastName: "Tsu"});
users.add({firstName: "Piper", lastName: "BoBo"});

////////////////////////////////////////////

// app.get('/', function (req, res) {
//   res.send('Hello World - from webapp.js')
// })

app.use(express.static('static'));

let requests = 0;
app.get('/api/users', (req, res) => res.status(200).send(users.JSON) );

app.listen(3000, () => console.log('Example app listening on port 3000!'));
