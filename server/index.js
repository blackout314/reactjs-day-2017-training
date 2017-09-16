const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./todos')
const { random } = require('lodash')

const delay = time => new Promise(resolve => {
  setTimeout(resolve, time || random(500, 1500, false))
})

const PORT = 3001

const app = express();

app.use(bodyParser.text())

app.get('/todo', (req, res)  => {
  delay().then(() => res.send(todos.get()));
});

app.post('/todo', (req, res) => {
  delay().then(() => res.send(todos.add(req.body)));
});

app.put('/todo/toggle/:id', (req, res) => {
  const index = parseInt(req.params.id, 10)
  delay().then(() => res.send(todos.markAsDone(index)));
});

app.delete('/todo/:id', (req, res) => {
  const index = parseInt(req.params.id, 10)
  delay().then(() => res.send(todos.deleteItem(index)));
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});