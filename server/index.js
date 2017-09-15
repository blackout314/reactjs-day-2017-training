const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./todos')

const PORT = 3001

const app = express();

app.use(bodyParser.text())

app.get('/todo', (req, res)  => {
  res.send(todos.get());
});

app.post('/todo', (req, res) => {
  res.send(todos.add(req.body))
});

app.put('/todo/toggle/:id', (req, res) => {
  const index = parseInt(req.params.id, 10)
  res.send(todos.markAsDone(index))
});

app.delete('/todo/:id', (req, res) => {
  const index = parseInt(req.params.id, 10)
  res.send(todos.deleteItem(index))
});

app.listen(PORT, () => {
  console.log(`Server Listening on port ${PORT}`);
});